const { test } = require('testcafe');
const { printMetric } = require('../utils/feedback.js');
const { checkMetric } = require('../utils/checkMetric');

function runTest(name, metricName, config, metricType = null, metrics) {
          console.log(metrics);
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

module.exports = { runTest };
