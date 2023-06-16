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
};

module.exports = metricsConfig;
