import { spawnSync } from 'node:child_process'
import console from 'node:console'
import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import process from 'node:process'
import { fileURLToPath, URL } from 'node:url'
import { performance } from 'node:perf_hooks'

const scriptDir = dirname(fileURLToPath(import.meta.url))
const projectRoot = resolve(scriptDir, '..')

export function percentile (values, percent) {
  if (values.length === 0) throw new Error('cannot calculate a percentile without samples')
  const sorted = [...values].sort((a, b) => a - b)
  return sorted[Math.max(0, Math.ceil((percent / 100) * sorted.length) - 1)]
}

export function benchmarkEntry (name, samples, surface) {
  return {
    name,
    unit: 'ms',
    value: percentile(samples, 95),
    extra: `stat=p95 samples=[${samples.join(', ')}] surface=${surface}`
  }
}

async function timeRequest (baseUrl, requestPath) {
  const started = performance.now()
  const response = await globalThis.fetch(new URL(requestPath, baseUrl), {
    headers: { 'user-agent': 'betmas-e2e catalog-phase1 benchmark' },
    signal: globalThis.AbortSignal.timeout(120000)
  })
  await response.arrayBuffer()
  if (!response.ok) throw new Error(`${requestPath} returned ${response.status}`)
  return Math.round(performance.now() - started)
}

function timeHp1 () {
  const started = performance.now()
  const query = resolve(scriptDir, 'xquery/catalog-hp1.xq')
  const result = spawnSync('xst', ['run', '--file', query], {
    cwd: projectRoot,
    encoding: 'utf8',
    env: {
      ...process.env,
      EXISTDB_SERVER: process.env.EXISTDB_SERVER || 'http://127.0.0.1:8082/exist',
      EXISTDB_USER: process.env.EXISTDB_USER || 'admin',
      EXISTDB_PASS: process.env.EXISTDB_PASS || ''
    },
    timeout: 300000
  })
  if (result.error) throw result.error
  if (result.status !== 0) throw new Error(result.stderr || `xst exited ${result.status}`)
  const payload = JSON.parse(result.stdout)
  if (payload.requested !== 1000) throw new Error(`HP1 selected ${payload.requested}, expected 1000`)
  return Math.round(performance.now() - started)
}

async function collectSamples (count, measure) {
  const values = []
  for (let sample = 0; sample < count; sample += 1) values.push(await measure(sample))
  return values
}

async function main () {
  const sampleCount = Number.parseInt(process.env.CATALOG_BENCH_SAMPLES || '5', 10)
  const baseUrl = process.env.CATALOG_BASE_URL || 'http://127.0.0.1:8080/'
  const hp1 = await collectSamples(sampleCount, async () => timeHp1())
  const hp2 = await collectSamples(sampleCount, async () => {
    const fullList = await timeRequest(baseUrl, '/api/listRepositoriesName')
    const typeahead = await timeRequest(baseUrl, '/api/idlookup?id=INS00')
    return fullList + typeahead
  })
  const biblPointers = [
    'bm:BausiSmidt2010Wansleben',
    'bm:Bausi2015Wansleben',
    'bm:Dillmann1866Chrestomathia',
    'bm:Bausi1989MssBNCF',
    'bm:GrebTiss1935Codices'
  ]
  const hp4 = await collectSamples(sampleCount, async (sample) => {
    const pointer = biblPointers[sample % biblPointers.length]
    return timeRequest(baseUrl, `/bibliography?pointer=${encodeURIComponent(pointer)}`)
  })
  const results = [
    benchmarkEntry('catalog-hp1-title-1k', hp1, 'xst legacy printTitleID over 1,000 mixed ids'),
    benchmarkEntry('catalog-hp2-institutions', hp2, 'HTTP full repository list plus institution id typeahead'),
    benchmarkEntry('catalog-hp4-bibliography', hp4, 'HTTP bibliography page over representative bm pointers')
  ]
  const outPath = resolve(projectRoot, process.env.CATALOG_BENCH_OUT || 'benchmarks/catalog-phase1-baseline.json')
  // eslint-disable-next-line security/detect-non-literal-fs-filename
  await mkdir(dirname(outPath), { recursive: true })
  // eslint-disable-next-line security/detect-non-literal-fs-filename
  await writeFile(outPath, JSON.stringify(results, null, 2) + '\n')
  console.log(JSON.stringify(results, null, 2))
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main().catch((error) => {
    console.error(error)
    process.exitCode = 1
  })
}
