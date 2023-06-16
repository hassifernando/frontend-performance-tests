const { url, strategy, informative } = require('../indexConfig');

const { measurePerformanceMetrics } = require('../utils/metrics');
const { printMetric } = require('../utils/feedback.js');
const { checkMetric } = require('../utils/checkMetric');

const metricsConfig = require('../utils/metricsConfig');

let metrics;

fixture('Performance Metrics Measurement')
          .page(url)
          .before(async () => {
                    metrics = await measurePerformanceMetrics(url, strategy);
          });

function runTest(name, metricName, config, metricType = null) {
          test(name, async (t) => {
                    printMetric(name, metrics[metricName], config, metricType);
                    if (!informative) {
                              await checkMetric(
                                        name,
                                        metrics[metricName],
                                        config,
                                        metricType
                              );
                    }
          });
}

const PerformanceTests = [
          {
                    name: 'Largest Contentful Paint (LCP)',
                    metricName: 'LARGEST_CONTENTFUL_PAINT_MS',
                    config: metricsConfig.LCP,
                    metricType: 'default',
          },
          {
                    name: 'First Input Delay (FID)',
                    metricName: 'FIRST_INPUT_DELAY_MS',
                    config: metricsConfig.FID,
                    metricType: 'default',
          },
          {
                    name: 'Cumulative Layout Shift (CLS)',
                    metricName: 'CUMULATIVE_LAYOUT_SHIFT_SCORE',
                    config: metricsConfig.CLS,
                    metricType: 'default',
          },
          {
                    name: 'First Contentful Paint (FCP)',
                    metricName: 'FIRST_CONTENTFUL_PAINT_MS',
                    config: metricsConfig.FCP,
                    metricType: 'default',
          },
          {
                    name: 'Interaction to Next Paint (INP)',
                    metricName: 'INTERACTION_TO_NEXT_PAINT',
                    config: metricsConfig.INP,
                    metricType: 'default',
          },
          {
                    name: 'Time to First Byte (TTFB)',
                    metricName: 'EXPERIMENTAL_TIME_TO_FIRST_BYTE',
                    config: metricsConfig.TTFB,
                    metricType: 'default',
          },
          {
                    name: 'Speed Index (SI)',
                    metricName: 'SPEEDINDEX',
                    config: metricsConfig.SI,
                    metricType: 'default',
          },
          {
                    name: 'Total Blocking Time (TBT)',
                    metricName: 'TOTALBLOCKINGTIME',
                    config: metricsConfig.TBT,
                    metricType: 'default',
          },
          {
                    name: 'Time to Interactive (TTI)',
                    metricName: 'TIMETOINTERACTIVE',
                    config: metricsConfig.TTI,
                    metricType: 'default',
          },
          {
                    name: 'First Meaningful Paint (FMP)',
                    metricName: 'FIRSTMEANINGFULPAINT',
                    config: metricsConfig.FMP,
                    metricType: 'default',
          },
          {
                    name: 'Max Potential First Input Delay (MAXFID)',
                    metricName: 'MAXFIRSTINPUTDELAY',
                    config: metricsConfig.MAXFID,
                    metricType: 'default',
          },
          {
                    name: '[Score] Performance',
                    metricName: 'performanceScore',
                    config: metricsConfig.performanceScore,
                    metricType: 'score',
          },
          {
                    name: '[Score] Accessibility',
                    metricName: 'accessibilityScore',
                    config: metricsConfig.accessibilityScore,
                    metricType: 'score',
          },
          {
                    name: '[Score] Best Practices',
                    metricName: 'bestpracticesScore',
                    config: metricsConfig.bestpracticesScore,
                    metricType: 'score',
          },
          {
                    name: '[Score] Seo',
                    metricName: 'seoScore',
                    config: metricsConfig.seoScore,
                    metricType: 'score',
          },
          {
                    name: '[Score] Pwa',
                    metricName: 'pwaScore',
                    config: metricsConfig.pwaScore,
                    metricType: 'score',
          },
];

for (const test of PerformanceTests) {
          runTest(test.name, test.metricName, test.config, test.metricType);
}