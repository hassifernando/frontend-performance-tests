function printMetric(metricName, value, thresholds, metricType = null) {
          let metricUnit = thresholds.metricUnit ? thresholds.metricUnit : '';
          let signal = metricType == 'score' ? '>' : '<';
          let signalPoor = metricType == 'score' ? '<' : '>';

          console.log(
                    `${metricName}: ${value}${metricUnit} \nGood (${signal} ${thresholds.good}${metricUnit}) \nNeed Improve (${thresholds.good}${metricUnit} - ${thresholds.needImprove}${metricUnit}) \nPoor (${signalPoor}${thresholds.needImprove}${metricUnit})`
          );

          const feedback = getFeedback(
                    metricName,
                    value,
                    thresholds,
                    metricType
          );
          console.log(feedback);
}

function getFeedback(metricName, value, thresholds, metricType) {
          switch (metricType) {
                    case 'score':
                              if (value >= thresholds.good) {
                                        return `Good!`;
                              } else if (value >= thresholds.needImprove) {
                                        return `Needs Improvement!`;
                              } else {
                                        return `Poor!`;
                              }

                    default:
                              if (value < thresholds.good) {
                                        return `Good!`;
                              } else if (value < thresholds.needImprove) {
                                        return `Needs Improvement!`;
                              } else {
                                        return `Poor!`;
                              }
          }
}

module.exports = {
          printMetric,
          getFeedback,
};
