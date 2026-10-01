// Markdown summary of a11y-results.json (written by cypress.config.mjs):
// one row per page, then violations grouped by rule with their WCAG criteria.
import { readFileSync } from 'node:fs'

const rows = JSON.parse(readFileSync(process.argv[2] ?? 'a11y-results.json', 'utf8'))
const byRule = {}

console.log('## WCAG audit (axe-core)\n\n| Page | Violating nodes | Rules |\n|---|---:|---|')
for (const { name, value, extra } of rows) {
  const violations = JSON.parse(extra)
  console.log(`| ${name} | ${value} | ${violations.map((v) => `${v.id} (${v.nodes})`).join(', ') || '-'} |`)
  for (const v of violations) {
    const r = (byRule[v.id] ??= { ...v, nodes: 0, pages: 0 })
    r.nodes += v.nodes
    r.pages += 1
  }
}

console.log('\n### By rule\n\n| Rule | Impact | WCAG | Pages | Nodes | Description |\n|---|---|---|---:|---:|---|')
for (const v of Object.values(byRule).sort((a, b) => b.nodes - a.nodes)) {
  console.log(`| ${v.id} | ${v.impact} | ${v.wcag.join(', ')} | ${v.pages} | ${v.nodes} | ${v.help} |`)
}
