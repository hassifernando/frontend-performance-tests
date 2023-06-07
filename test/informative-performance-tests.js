const url = 'https://www.tuiexperiences.com/uk';
const strategy = 'desktop';

const { measurePerformanceMetrics } = require('../utils/metrics');
const { printMetric } = require('../utils/feedback.js');
const { checkMetric } = require('../utils/checkMetric');

const metricsConfig = require('../utils/metricsConfig');

const informative = false;

let metrics;

fixture('Performance Metrics Measurement')
          .page(url)
          .before(async () => {
                    metrics = await measurePerformanceMetrics(url, strategy);
          });

test('Largest Contentful Paint (LCP)', async (t) => {
          printMetric(
                    'LCP',
                    metrics.LARGEST_CONTENTFUL_PAINT_MS,
                    metricsConfig.LCP
          );
          if (!informative) {
                    await checkMetric(
                              'LCP',
                              metrics.LARGEST_CONTENTFUL_PAINT_MS,
                              metricsConfig.LCP
                    );
          }
});

test('First Input Delay (FID)', async (t) => {
          printMetric('FID', metrics.FIRST_INPUT_DELAY_MS, metricsConfig.FID);
          if (!informative) {
                    await checkMetric(
                              'FID',
                              metrics.FIRST_INPUT_DELAY_MS,
                              metricsConfig.FID
                    );
          }
});

test('Cumulative Layout Shift (CLS)', async (t) => {
          printMetric(
                    'CLS',
                    metrics.CUMULATIVE_LAYOUT_SHIFT_SCORE,
                    metricsConfig.CLS
          );
          if (!informative) {
                    await checkMetric(
                              'CLS',
                              metrics.CUMULATIVE_LAYOUT_SHIFT_SCORE,
                              metricsConfig.CLS
                    );
          }
});

test('First Contentful Paint (FCP)', async (t) => {
          printMetric(
                    'FCP',
                    metrics.FIRST_CONTENTFUL_PAINT_MS,
                    metricsConfig.FCP
          );
          if (!informative) {
                    await checkMetric(
                              'FCP',
                              metrics.FIRST_CONTENTFUL_PAINT_MS,
                              metricsConfig.FCP
                    );
          }
});

test('Interaction to Next Paint (INP)', async (t) => {
          printMetric(
                    'INP',
                    metrics.INTERACTION_TO_NEXT_PAINT,
                    metricsConfig.INP
          );
          if (!informative) {
                    await checkMetric(
                              'INP',
                              metrics.INTERACTION_TO_NEXT_PAINT,
                              metricsConfig.INP
                    );
          }
});

test('Time to First Byte (TTFB)', async (t) => {
          printMetric(
                    'TTFB',
                    metrics.EXPERIMENTAL_TIME_TO_FIRST_BYTE,
                    metricsConfig.TTFB
          );
          if (!informative) {
                    await checkMetric(
                              'TTFB',
                              metrics.EXPERIMENTAL_TIME_TO_FIRST_BYTE,
                              metricsConfig.TTFB
                    );
          }
});

test('Speed Index (SI)', async (t) => {
          printMetric('SI', metrics.SPEEDINDEX, metricsConfig.SI);

          if (!informative) {
                    await checkMetric(
                              'SI',
                              metrics.SPEEDINDEX,
                              metricsConfig.SI
                    );
          }
});

test('Total Blocking Time (TBT)', async (t) => {
          printMetric('TBT', metrics.TOTALBLOCKINGTIME, metricsConfig.TBT);
          if (!informative) {
                    await checkMetric(
                              'TBT',
                              metrics.TOTALBLOCKINGTIME,
                              metricsConfig.TBT
                    );
          }
});

//RETIRED METRICS

test('Time to Interactive (TTI)', async (t) => {
          printMetric('TTI', metrics.TIMETOINTERACTIVE, metricsConfig.TTI);
          if (!informative) {
                    await checkMetric(
                              'TTI',
                              metrics.TIMETOINTERACTIVE,
                              metricsConfig.TTI
                    );
          }
});

test('First Meaningful Paint (FMP)', async (t) => {
          printMetric('FMP', metrics.FIRSTMEANINGFULPAINT, metricsConfig.FMP);
          if (!informative) {
                    await checkMetric(
                              'FMP',
                              metrics.FIRSTMEANINGFULPAINT,
                              metricsConfig.FMP
                    );
          }
});

test('Max Potential First Input Delay (MAXFID)', async (t) => {
          printMetric(
                    'MAXFID',
                    metrics.MAXFIRSTINPUTDELAY,
                    metricsConfig.MAXFID
          );
          if (!informative) {
                    await checkMetric(
                              'MAXFID',
                              metrics.MAXFIRSTINPUTDELAY,
                              metricsConfig.MAXFID
                    );
          }
});

//score

test('[Score] Performance', async (t) => {
          printMetric(
                    'performance',
                    metrics.performanceScore,
                    metricsConfig.performanceScore,
                    'score'
          );
          if (!informative) {
                    await checkMetric(
                              'performance',
                              metrics.performanceScore,
                              metricsConfig.performanceScore,
                              'score'
                    );
          }
});

test('[Score] Accessibility', async (t) => {
          printMetric(
                    'accessibility',
                    metrics.accessibilityScore,
                    metricsConfig.accessibilityScore,
                    'score'
          );
          if (!informative) {
                    await checkMetric(
                              'accessibility',
                              metrics.accessibilityScore,
                              metricsConfig.accessibilityScore,
                              'score'
                    );
          }
});

test('[Score] Best Practices', async (t) => {
          printMetric(
                    'bestpractices',
                    metrics.bestpracticesScore,
                    metricsConfig.bestpracticesScore,
                    'score'
          );
          if (!informative) {
                    await checkMetric(
                              'bestpractices',
                              metrics.bestpracticesScore,
                              metricsConfig.bestpracticesScore,
                              'score'
                    );
          }
});

test('[Score] Seo', async (t) => {
          printMetric('seo', metrics.seoScore, metricsConfig.seoScore, 'score');
          if (!informative) {
                    await checkMetric(
                              'seo',
                              metrics.seoScore,
                              metricsConfig.seoScore,
                              'score'
                    );
          }
});

test('[Score] Pwa', async (t) => {
          printMetric('pwa', metrics.pwaScore, metricsConfig.pwaScore, 'score');
          if (!informative) {
                    await checkMetric(
                              'pwa',
                              metrics.pwaScore,
                              metricsConfig.pwaScore,
                              'score'
                    );
          }
});
