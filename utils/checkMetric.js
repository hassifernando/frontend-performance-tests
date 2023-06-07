import { t } from 'testcafe';

async function checkMetric(metricName, value, thresholds, metricType = null) {
          let metricUnit = thresholds.metricUnit ? thresholds.metricUnit : '';

          switch (metricType) {
                    case 'score':
                              await t
                                        .expect(value)
                                        .gte(
                                                  thresholds.good,
                                                  `${metricName} (${value}${metricUnit}) is under the threshold of ${thresholds.good}${metricUnit}`
                                        );
                              break;

                    default:
                              await t
                                        .expect(value)
                                        .lt(
                                                  thresholds.good,
                                                  `${metricName} (${value}${metricUnit}) exceeds the threshold of ${thresholds.good}${metricUnit}`
                                        );
                              break;
          }
}

module.exports = {
          checkMetric,
};
