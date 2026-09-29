import assert from 'node:assert/strict'
import test from 'node:test'

import { benchmarkEntry, percentile } from './catalog-benchmark.mjs'

test('percentile returns the nearest-rank p95', () => {
  assert.equal(percentile([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 95), 19)
})

test('benchmarkEntry emits tracker-compatible output', () => {
  assert.deepEqual(
    benchmarkEntry('catalog-hp1-title-1k', [80, 100, 120], 'xst legacy title lookup'),
    {
      name: 'catalog-hp1-title-1k',
      unit: 'ms',
      value: 120,
      extra: 'stat=p95 samples=[80, 100, 120] surface=xst legacy title lookup'
    }
  )
})
