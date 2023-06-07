// metricsConfig.js

const metricsConfig = {
          //metrics -- https://developer.chrome.com/docs/lighthouse/performance/

          //CORE WEB VITALS
          LCP: { good: 2.5, needImprove: 4, metricUnit: 's' },
          FID: { good: 100, needImprove: 300, metricUnit: 'ms' },
          CLS: { good: 0.1, needImprove: 0.25 },
          //Reduce Server Response Time
          TTFB: { good: 0.8, needImprove: 1.8, metricUnit: 's' },

          FCP: { good: 1.8, needImprove: 3, metricUnit: 's' },
          SI: { good: 3.4, needImprove: 5.8, metricUnit: 's' },
          TBT: { good: 200, needImprove: 600, metricUnit: 'ms' },
          INP: { good: 200, needImprove: 500, metricUnit: 'ms' },

          //retired metrics
          TTI: { good: 3.8, needImprove: 7.3, metricUnit: 's' },
          FMP: { good: 2, needImprove: 4, metricUnit: 's' },
          MAXFID: { good: 130, needImprove: 250, metricUnit: 'ms' },

          //score
          performanceScore: { good: 90, needImprove: 50 },
          accessibilityScore: { good: 90, needImprove: 50 },
          bestpracticesScore: { good: 90, needImprove: 50 },
          seoScore: { good: 90, needImprove: 50 },
          pwaScore: { good: 90, needImprove: 50 },

          //review

          'Third-party Transfer Size': { good: 1000, needImprove: 5000 },
          'Page Load Time': { good: 5000, needImprove: 10000 },

          'Page Size': { good: 1000000, needImprove: 2000000 },
          'Server Response Time': { good: 200, needImprove: 500 },
          'JavaScript Bootup Time on Page': { good: 1000, needImprove: 2000 },
          'JavaScript Execution Time on Main Thread': {
                    good: 1000,
                    good: 2000,
          },
          'Potential File Size Savings due to Avoiding Legacy JavaScript Usage':
                    { good: 100000, needImprove: 50000 },
          'uses-long-cache-ttl': { good: 5000, needImprove: 10000 },

          'Page Load Time (Slow Connection)': {
                    good: 10000,
                    needImprove: 20000,
          },

          'Max Potential FID': { good: 100, needImprove: 300 },
          'First Meaningful Paint': { good: 1000, needImprove: 1500 },
          'Reduce Unused JavaScript': { good: 500, needImprove: 1000 },
          'Text Compression Usage': { good: 100, needImprove: 300 },
          'Avoid Excessive DOM Size': { good: 1000, needImprove: 5000 },
          'Avoid Multiple Page Redirections': { good: 100, needImprove: 300 },
};

module.exports = metricsConfig;
