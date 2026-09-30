// Summarise .lighthouseci/lhr-*.json (median run per URL) into:
//  - a markdown table on stdout (append to $GITHUB_STEP_SUMMARY)
//  - lighthouse-results.json for github-action-benchmark (customBiggerIsBetter)
//  - a list of failing accessibility audits per URL (WCAG triage)
import { readdirSync, readFileSync, writeFileSync } from 'node:fs'

const dir = process.argv[2] ?? '.lighthouseci'
const cats = ['performance', 'accessibility', 'best-practices', 'seo']
const byUrl = {}
for (const f of readdirSync(dir).filter((f) => /^lhr-.*\.json$/.test(f))) {
  const lhr = JSON.parse(readFileSync(`${dir}/${f}`, 'utf8'))
  ;(byUrl[new URL(lhr.finalUrl).pathname] ??= []).push(lhr)
}

const median = (xs) => [...xs].sort((a, b) => a - b)[Math.floor(xs.length / 2)]
const rows = []
const bench = []
const a11y = []
for (const [path, runs] of Object.entries(byUrl).sort()) {
  const score = (c) => Math.round(median(runs.map((r) => r.categories[c].score * 100)))
  const s = cats.map(score)
  rows.push(`| \`${path}\` | ${s.join(' | ')} |`)
  cats.forEach((c, i) => bench.push({ name: `${path} ${c}`, unit: 'score', value: s[i] }))

  const lhr = runs[0]
  const failing = lhr.categories.accessibility.auditRefs
    .map((a) => lhr.audits[a.id])
    .filter((a) => a.score === 0)
    .map((a) => `${a.id} (${a.details?.items?.length ?? '?'})`)
  if (failing.length) a11y.push(`- \`${path}\`: ${failing.join(', ')}`)
}

writeFileSync('lighthouse-results.json', JSON.stringify(bench, null, 2))
console.log('## Lighthouse (production, median of runs)\n')
console.log(`| Page | ${cats.join(' | ')} |\n|---|${cats.map(() => '---:').join('|')}|`)
console.log(rows.join('\n'))
console.log('\n### Failing accessibility audits (audit id, affected elements)\n')
console.log(a11y.join('\n') || 'none')
