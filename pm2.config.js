module.exports = {
          apps: [
                    {
                              name: 'informative-performance-tests-loop - https://www.tuiexperiences.com/uk - desktop',
                              script: '/Users/fernando.hassi/.nvm/versions/node/v16.15.0/bin/testcafe',
                              args: 'chrome:headless ./test/informative-performance-tests-loop.js --url="https://www.tuiexperiences.com/uk" --strategy="desktop" --informative="true"',
                              cwd: '/Users/fernando.hassi/ws-learning/knowledge-sharing',
                    },
                    {
                              name: 'informative-performance-tests-loop - https://www.tuiexperiences.com/uk - mobile',
                              script: '/Users/fernando.hassi/.nvm/versions/node/v16.15.0/bin/testcafe',
                              args: 'chrome:headless ./test/informative-performance-tests-loop.js --url="https://www.tuiexperiences.com/uk" --strategy="mobile" --informative="true"',
                              cwd: '/Users/fernando.hassi/ws-learning/knowledge-sharing',
                    },
          ],
};
