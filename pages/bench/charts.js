/* eslint-env browser */

/**
 * GitHub Pages charts for github-action-benchmark `data.js` files.
 * Overlay, date axis, sample min–max band, dashed budget, tension 0.
 */
(function (global) {
  const HIDDEN_PREFIX = '_'

  function parseExtra (extra) {
    const out = { target: null, budgetMs: null, samples: [] }
    if (!extra) return out
    const budget = extra.match(/budget=(\d+)ms/)
    if (budget) out.budgetMs = Number(budget[1])
    const samples = extra.match(/samples=\[([^\]]+)\]/)
    if (samples) {
      out.samples = samples[1]
        .split(',')
        .map(function (s) { return Number(s.trim()) })
        .filter(function (n) { return !Number.isNaN(n) })
    }
    const target = extra.match(/target=(\w+)/)
    if (target) out.target = target[1]
    return out
  }

  function stripDataJs (text) {
    return text
      .replace(/^\s*window\.BENCHMARK_DATA\s*=\s*/, '')
      .replace(/;\s*$/, '')
      .trim()
  }

  function loadBenchmarkFile (url) {
    return fetch(url).then(function (res) {
      if (!res.ok) throw new Error(url + ' HTTP ' + res.status)
      return res.text()
    }).then(function (text) {
      return JSON.parse(stripDataJs(text))
    })
  }

  function flattenBenches (data) {
    const byName = new Map()
    const entries = data.entries || {}
    Object.keys(entries).forEach(function (setName) {
      entries[setName].forEach(function (entry) {
        (entry.benches || []).forEach(function (bench) {
          const parsed = parseExtra(bench.extra)
          const samples = parsed.samples.length ? parsed.samples : [bench.value]
          const point = {
            x: entry.date,
            y: bench.value,
            min: Math.min.apply(null, samples),
            max: Math.max.apply(null, samples),
            budgetMs: parsed.budgetMs,
            extra: bench.extra,
            unit: bench.unit || 'ms',
            commit: entry.commit
          }
          const arr = byName.get(bench.name)
          if (arr) arr.push(point)
          else byName.set(bench.name, [point])
        })
      })
    })
    return { lastUpdate: data.lastUpdate, byName: byName }
  }

  function hexAlpha (hex, aa) {
    return hex + aa
  }

  function formatDuration (ms) {
    if (ms == null) return ''
    if (ms === 0) return '0'
    if (ms >= 1000 && ms % 1000 === 0) return (ms / 1000) + 's'
    if (ms >= 1000) return (ms / 1000).toFixed(1) + 's'
    return ms + 'ms'
  }

  function sourceShort (label) {
    if (label === 'Container') return 'C'
    if (label === 'Production') return 'P'
    return label
  }

  function budgetNote (loaded, name) {
    const parts = []
    loaded.forEach(function (l) {
      const pts = l.flat.byName.get(name)
      if (!pts || !pts.length) return
      const ms = pts[pts.length - 1].budgetMs
      if (ms == null) return
      const prefix = loaded.length > 1 ? sourceShort(l.source.label) + ' ' : ''
      parts.push(prefix + formatDuration(ms))
    })
    return parts.length ? 'budget ' + parts.join(' · ') : ''
  }

  function dataMaxY (datasets) {
    let max = 0
    datasets.forEach(function (ds) {
      if (ds.label.indexOf(HIDDEN_PREFIX) === 0) return
      if (/ budget$/.test(ds.label)) return
      ds.data.forEach(function (p) {
        if (typeof p.y === 'number' && p.y > max) max = p.y
      })
    })
    return max
  }

  function yScaleMax (observed) {
    return observed > 0 ? observed * 1.12 : 1
  }

  function withFittingBudgets (datasets, maxY) {
    return datasets.filter(function (ds) {
      if (!/ budget$/.test(ds.label)) return true
      return ds.data.every(function (p) { return p.y <= maxY })
    })
  }

  function seriesDatasets (source, points) {
    const color = source.color
    const label = source.label
    const maxPts = points.map(function (p) { return { x: p.x, y: p.max } })
    const minPts = points.map(function (p) { return { x: p.x, y: p.min } })
    const medPts = points.map(function (p) { return { x: p.x, y: p.y } })
    const budgetPts = points
      .filter(function (p) { return p.budgetMs != null })
      .map(function (p) { return { x: p.x, y: p.budgetMs } })

    const ds = [
      {
        label: HIDDEN_PREFIX + label + ' range',
        data: maxPts,
        borderWidth: 0,
        pointRadius: 0,
        pointHitRadius: 0,
        tension: 0,
        fill: { target: '+1', above: hexAlpha(color, '33') },
        backgroundColor: hexAlpha(color, '33'),
        order: 3,
        metaPoints: points
      },
      {
        label: HIDDEN_PREFIX + label + ' min',
        data: minPts,
        borderWidth: 0,
        pointRadius: 0,
        pointHitRadius: 0,
        tension: 0,
        fill: false,
        order: 3,
        metaPoints: points
      },
      {
        label: label,
        data: medPts,
        borderColor: color,
        backgroundColor: color,
        borderWidth: 2,
        pointRadius: 3,
        tension: 0,
        fill: false,
        spanGaps: true,
        order: 1,
        metaPoints: points
      }
    ]
    if (budgetPts.length) {
      ds.push({
        label: label + ' budget',
        data: budgetPts,
        borderColor: color,
        backgroundColor: 'transparent',
        borderWidth: 1.5,
        borderDash: [6, 4],
        pointRadius: 0,
        tension: 0,
        fill: false,
        spanGaps: true,
        order: 0,
        metaPoints: points.filter(function (p) { return p.budgetMs != null })
      })
    }
    return ds
  }

  function renderNav (nav, currentHref) {
    const navEl = document.getElementById('bench-nav')
    if (!navEl || !nav) return
    nav.forEach(function (item) {
      const a = document.createElement('a')
      a.href = item.href
      a.textContent = item.label
      if (item.href === currentHref) a.setAttribute('aria-current', 'page')
      navEl.appendChild(a)
    })
  }

  function tooltipTitle (items) {
    if (!items.length) return ''
    const x = items[0].parsed.x
    return new Date(x).toISOString().replace('T', ' ').replace(/\.\d+Z$/, ' UTC')
  }

  function tooltipLabel (ctx) {
    if (ctx.dataset.label.indexOf(HIDDEN_PREFIX) === 0) return null
    const pts = ctx.dataset.metaPoints
    const pt = pts && pts[ctx.dataIndex]
    const unit = (pt && pt.unit) || 'ms'
    let line = ctx.dataset.label + ': ' + ctx.parsed.y + ' ' + unit
    if (pt && pt.min !== pt.max) line += ' (samples ' + pt.min + '–' + pt.max + ')'
    return line
  }

  function tooltipAfterBody (items) {
    const item = items.find(function (it) {
      return it.dataset.label.indexOf(HIDDEN_PREFIX) !== 0 &&
        it.dataset.label.indexOf(' budget') === -1
    }) || items[0]
    const pts = item.dataset.metaPoints
    const pt = pts && pts[item.dataIndex]
    if (!pt || !pt.commit) return []
    const msg = (pt.commit.message || '').split('\n')[0]
    const id = (pt.commit.id || '').slice(0, 7)
    return ['', id + '  ' + msg]
  }

  function onChartClick (_evt, elements, chart) {
    if (!elements.length) return
    const el = elements[0]
    const ds = chart.data.datasets[el.datasetIndex]
    if (!ds || ds.label.indexOf(HIDDEN_PREFIX) === 0) return
    const pt = ds.metaPoints && ds.metaPoints[el.index]
    if (pt && pt.commit && pt.commit.url) window.open(pt.commit.url, '_blank')
  }

  function renderGraph (parent, name, datasets, note) {
    const wrap = document.createElement('div')
    wrap.className = 'benchmark-chart-wrap'
    const heading = document.createElement('h2')
    heading.className = 'benchmark-chart-title'
    const title = document.createElement('span')
    title.textContent = name
    heading.appendChild(title)
    if (note) {
      const n = document.createElement('span')
      n.className = 'budget-note'
      n.textContent = note
      heading.appendChild(n)
    }
    const canvas = document.createElement('canvas')
    const box = document.createElement('div')
    box.className = 'benchmark-chart-box'
    box.appendChild(canvas)
    wrap.appendChild(heading)
    wrap.appendChild(box)
    parent.appendChild(wrap)

    const maxY = yScaleMax(dataMaxY(datasets))
    const fitted = withFittingBudgets(datasets, maxY)
    fitted.forEach(function (ds) {
      if (ds.label.indexOf(HIDDEN_PREFIX) !== 0) return
      ds.data = ds.data.map(function (p) {
        return { x: p.x, y: Math.min(p.y, maxY) }
      })
    })

    return new Chart(canvas, {
      type: 'line',
      data: { datasets: fitted },
      options: {
        parsing: false,
        responsive: true,
        maintainAspectRatio: false,
        interaction: { mode: 'nearest', intersect: false },
        layout: { padding: { top: 4, right: 6, bottom: 0, left: 0 } },
        plugins: {
          legend: { display: false },
          tooltip: {
            filter: function (item) {
              return item.dataset.label.indexOf(HIDDEN_PREFIX) !== 0
            },
            callbacks: {
              title: tooltipTitle,
              label: tooltipLabel,
              afterBody: tooltipAfterBody
            }
          }
        },
        scales: {
          x: {
            type: 'time',
            time: { tooltipFormat: 'yyyy-MM-dd HH:mm' },
            ticks: { maxRotation: 0, autoSkip: true, maxTicksLimit: 5, font: { size: 10 } }
          },
          y: {
            beginAtZero: true,
            max: maxY,
            ticks: {
              maxTicksLimit: 4,
              font: { size: 10 },
              callback: function (value) { return formatDuration(value) }
            }
          }
        },
        onClick: onChartClick
      }
    })
  }

  function mount (opts) {
    renderNav(opts.nav, opts.currentHref)
    document.getElementById('page-title').textContent = opts.title

    return Promise.all(opts.sources.map(function (src) {
      return loadBenchmarkFile(src.url).then(function (data) {
        return { source: src, flat: flattenBenches(data) }
      })
    })).then(function (loaded) {
      const last = Math.max.apply(null, loaded.map(function (l) {
        return l.flat.lastUpdate || 0
      }))
      document.getElementById('last-update').textContent = last
        ? new Date(last).toString()
        : 'unknown'

      const names = []
      loaded.forEach(function (l) {
        l.flat.byName.forEach(function (_pts, name) {
          if (names.indexOf(name) === -1) names.push(name)
        })
      })

      const main = document.getElementById('main')
      names.forEach(function (name) {
        const datasets = []
        loaded.forEach(function (l) {
          const pts = l.flat.byName.get(name)
          if (pts && pts.length) datasets.push.apply(datasets, seriesDatasets(l.source, pts))
        })
        if (datasets.length) renderGraph(main, name, datasets, budgetNote(loaded, name))
      })

      const dl = document.getElementById('dl-button')
      if (dl) {
        dl.onclick = function () {
          const payload = loaded.map(function (l) {
            const series = {}
            l.flat.byName.forEach(function (pts, name) {
              series[name] = pts.map(function (p) {
                return {
                  date: p.x,
                  median: p.y,
                  min: p.min,
                  max: p.max,
                  budgetMs: p.budgetMs,
                  commit: p.commit && p.commit.id
                }
              })
            })
            return { label: l.source.label, lastUpdate: l.flat.lastUpdate, series: series }
          })
          const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' })
          const a = document.createElement('a')
          a.href = URL.createObjectURL(blob)
          a.download = 'benchmark-series.json'
          a.click()
        }
      }
    }).catch(function (err) {
      const main = document.getElementById('main')
      const p = document.createElement('p')
      p.textContent = 'Failed to load benchmark data: ' + err.message
      main.appendChild(p)
    })
  }

  global.BenchCharts = { mount: mount, parseExtra: parseExtra }
})(typeof window !== 'undefined' ? window : this)
