import assert from 'node:assert/strict'
import test from 'node:test'

import { benchmarkEntry, benchmarkRequestHeaders, percentile, validateHp3Payload } from './catalog-benchmark.mjs'

test('percentile returns the nearest-rank p95', () => {
  assert.equal(percentile([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 95), 19)
})

test('benchmark HTTP requests do not reuse long-lived nginx connections', () => {
  assert.equal(benchmarkRequestHeaders.connection, 'close')
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

test('validateHp3Payload accepts mixed person, place, and #tN textpart ids', () => {
  assert.doesNotThrow(() => validateHp3Payload({
    requested: 750,
    resolved: 750,
    persons: 250,
    places: 250,
    textparts: 250,
    textPartSubIds: 250
  }))
})

test('validateHp3Payload rejects a workload without #tN textpart ids', () => {
  assert.throws(
    () => validateHp3Payload({
      requested: 500,
      resolved: 500,
      persons: 250,
      places: 250,
      textparts: 0,
      textPartSubIds: 0
    }),
    /#tN/
  )
})
