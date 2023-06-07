module.exports = {
          apps: [
                    {
                              name: 'informative-performance-tests-loop',
                              script: './test/informative-performance-tests-loop.js',
                              watch: '.',
                              cron_restart: '*/5 * * * *', // Adicione esta linha para definir a frequência de reinício
                              env: {
                                        URL: 'https://www.tuiexperiences.com/uk',
                                        STRATEGY: 'desktop',
                                        INFORMATIVE: 'true',
                              },
                    },
                    // {
                    //           script: './service-worker/',
                    //           watch: ['./service-worker'],
                    // },
          ],

          deploy: {
                    production: {
                              user: 'SSH_USERNAME',
                              host: 'SSH_HOSTMACHINE',
                              ref: 'origin/master',
                              repo: 'GIT_REPOSITORY',
                              path: 'DESTINATION_PATH',
                              'pre-deploy-local': '',
                              'post-deploy':
                                        'npm install && pm2 reload ecosystem.config.js --env production',
                              'pre-setup': '',
                    },
          },
};
