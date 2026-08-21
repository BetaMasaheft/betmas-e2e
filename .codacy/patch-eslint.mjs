#!/usr/bin/env node
/**
 * Re-apply Cypress + browser globals and ESLint tweaks after `codacy-cli init`.
 * tools-configs/ is gitignored; run this once per machine after init.
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const target = join(root, '.codacy/tools-configs/eslint.config.mjs')

if (!existsSync(target)) {
  console.error('Missing .codacy/tools-configs/eslint.config.mjs — run: codacy-cli init')
  process.exit(1)
}

let src = readFileSync(target, 'utf8')
let changed = false

if (!src.includes('cy: "readonly"')) {
  const block = `        languageOptions: {
          globals: {
            cy: "readonly",
            Cypress: "readonly",
            describe: "readonly",
            context: "readonly",
            it: "readonly",
            expect: "readonly",
            before: "readonly",
            beforeEach: "readonly",
            after: "readonly",
            afterEach: "readonly",
            URL: "readonly",
            URLSearchParams: "readonly",
            window: "readonly",
            document: "readonly",
            fetch: "readonly",
            Blob: "readonly",
            Chart: "readonly",
            getComputedStyle: "readonly",
          },
        },
`
  const needle = '        files: ["**/*.js"'
  if (!src.includes(needle)) {
    console.error('Unexpected eslint.config.mjs shape — patch manually')
    process.exit(1)
  }
  src = src.replace(
    /(\{\s*\n\s*files: \["\*\*\/\*\.js".*?\n)/,
    `$1${block}`
  )
  changed = true
} else {
  if (!src.includes('URL: "readonly"')) {
    src = src.replace(
      /afterEach: "readonly",/,
      `afterEach: "readonly",
            URL: "readonly",
            URLSearchParams: "readonly",`
    )
    changed = true
  }
  if (!src.includes('Chart: "readonly"')) {
    src = src.replace(
      /URLSearchParams: "readonly",/,
      `URLSearchParams: "readonly",
            window: "readonly",
            document: "readonly",
            fetch: "readonly",
            Blob: "readonly",
            Chart: "readonly",
            getComputedStyle: "readonly",`
    )
    changed = true
  }
  if (!src.includes('getComputedStyle: "readonly"')) {
    src = src.replace(
      /Chart: "readonly",/,
      `Chart: "readonly",
            getComputedStyle: "readonly",`
    )
    changed = true
  }
}

if (src.includes('"no-unused-vars": ["error"]')) {
  src = src.replace(
    '"no-unused-vars": ["error"]',
    '"no-unused-vars": ["error", {"argsIgnorePattern": "^_"}]'
  )
  changed = true
}

if (!changed) {
  console.log('Codacy ESLint config already patched for Cypress')
  process.exit(0)
}

writeFileSync(target, src)
console.log('Patched Codacy ESLint config for Cypress')
