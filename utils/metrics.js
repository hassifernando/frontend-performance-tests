const axios = require('axios');
const fs = require('fs');
const { url, strategy, informative } = require('../indexConfig');
const path = require('path');

async function measurePerformanceMetrics(url, strategy = 'desktop') {
          const params = `&category=performance&category=best-practices&category=seo&category=accessibility&category=pwa&locale=en_GB`;
          const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${url}&strategy=${strategy}${params}`;
          const response = await axios.get(apiUrl);
          const metrics = response.data.lighthouseResult.audits;
          const loadingExperience = response.data.loadingExperience;
          const categoriesScore = response.data.lighthouseResult.categories;

          // Save the content in a JSON const
          const jsonData = JSON.stringify(response.data);
          const dateRef = new Date();
          const sanitizedUrl = url.replace(/[:/]/g, '_');
          const fileName = `${sanitizedUrl}-${strategy}-${dateRef
                    .toISOString()
                    .replace(/:/g, '-')}.json`;
          const directoryPath = path.resolve(__dirname, '../report');
          const filePath = path.join(directoryPath, fileName);

          fs.writeFile(filePath, jsonData, (err) => {
                    if (err) {
                              console.error(
                                        'An error occurred while creating the file:',
                                        err
                              );
                              return;
                    }
                    console.log('JSON file created and saved successfully!');
          });

          // LoadingExperience metrics
          const LARGEST_CONTENTFUL_PAINT_MS =
                    loadingExperience.metrics['LARGEST_CONTENTFUL_PAINT_MS']
                              .percentile / 1000;
          const FIRST_INPUT_DELAY_MS =
                    loadingExperience.metrics['FIRST_INPUT_DELAY_MS']
                              .percentile;
          const CUMULATIVE_LAYOUT_SHIFT_SCORE =
                    loadingExperience.metrics['CUMULATIVE_LAYOUT_SHIFT_SCORE']
                              .percentile / 100;
          const FIRST_CONTENTFUL_PAINT_MS =
                    loadingExperience.metrics['FIRST_CONTENTFUL_PAINT_MS']
                              .percentile / 1000;
          const INTERACTION_TO_NEXT_PAINT =
                    loadingExperience.metrics['INTERACTION_TO_NEXT_PAINT']
                              .percentile;
          const EXPERIMENTAL_TIME_TO_FIRST_BYTE =
                    loadingExperience.metrics['EXPERIMENTAL_TIME_TO_FIRST_BYTE']
                              .percentile / 1000;

          // Audits
          const SPEEDINDEX = metrics['speed-index'].numericValue / 1000;
          const TOTALBLOCKINGTIME = metrics['total-blocking-time'].numericValue;
          // Retired
          const TIMETOINTERACTIVE = metrics['interactive'].numericValue / 1000;
          const FIRSTMEANINGFULPAINT =
                    metrics['first-contentful-paint'].numericValue / 1000;
          const MAXFIRSTINPUTDELAY = metrics['max-potential-fid'].numericValue;
          // Categories score
          const performanceScore = categoriesScore['performance'].score * 100;
          const accessibilityScore =
                    categoriesScore['accessibility'].score * 100;
          const bestpracticesScore =
                    categoriesScore['best-practices'].score * 100;
          const seoScore = categoriesScore['seo'].score * 100;
          const pwaScore = categoriesScore['pwa'].score * 100;

          const results = {
                    dateRef,
                    url,
                    strategy,
                    LARGEST_CONTENTFUL_PAINT_MS,
                    FIRST_INPUT_DELAY_MS,
                    CUMULATIVE_LAYOUT_SHIFT_SCORE,
                    FIRST_CONTENTFUL_PAINT_MS,
                    INTERACTION_TO_NEXT_PAINT,
                    EXPERIMENTAL_TIME_TO_FIRST_BYTE,
                    SPEEDINDEX,
                    TOTALBLOCKINGTIME,
                    // Metrics retired
                    TIMETOINTERACTIVE,
                    FIRSTMEANINGFULPAINT,
                    MAXFIRSTINPUTDELAY,
                    // Scores
                    performanceScore,
                    accessibilityScore,
                    bestpracticesScore,
                    seoScore,
                    pwaScore,
          };

          const jsonResultsData = JSON.stringify(results);

          fs.writeFile(
                    `${directoryPath}/metricsresults_${fileName}`,
                    jsonResultsData,
                    (err) => {
                              if (err) {
                                        console.error(
                                                  'JSON file created and saved successfully!',
                                                  err
                                        );
                                        return;
                              }
                              console.log(
                                        'JSON file with the results only created and saved successfully!'
                              );
                    }
          );

          // Import data to Kibana
          const kibanaUrl = `http://localhost:9200/performance-frontend-tests/_doc`;

          try {
                    const response = await axios.post(
                              kibanaUrl,
                              jsonResultsData,
                              {
                                        headers: {
                                                  'Content-Type':
                                                            'application/json',
                                        },
                              }
                    );
                    console.log('Data imported successfully!');
                    console.log('Imported document ID:', response.data._id);
          } catch (error) {
                    console.error('Error while importing the data:', error);
          }

          // REVIEW
          return {
                    LARGEST_CONTENTFUL_PAINT_MS,
                    FIRST_INPUT_DELAY_MS,
                    CUMULATIVE_LAYOUT_SHIFT_SCORE,
                    FIRST_CONTENTFUL_PAINT_MS,
                    INTERACTION_TO_NEXT_PAINT,
                    EXPERIMENTAL_TIME_TO_FIRST_BYTE,
                    SPEEDINDEX,
                    TOTALBLOCKINGTIME,
                    // Metrics retired
                    TIMETOINTERACTIVE,
                    FIRSTMEANINGFULPAINT,
                    MAXFIRSTINPUTDELAY,
                    // Scores
                    performanceScore,
                    accessibilityScore,
                    bestpracticesScore,
                    seoScore,
                    pwaScore,
          };
}

module.exports = {
          measurePerformanceMetrics,
};
