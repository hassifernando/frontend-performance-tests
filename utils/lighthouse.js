import { exec } from 'child_process';
import fs from 'fs-extra';
import { v4 as uuidv4 } from 'uuid';

const axios = require('axios');

async function lighthouseMetric(url, strategy = 'desktop') {
          const uuid = uuidv4();
          const fileName = `myfile_${uuid}`;
          const lighthouseCommand = `lighthouse ${url} --output=json --output=html --output-path=./report/${fileName}`;

          // Promisify a função exec para poder usar o await
          const execPromise = (command) => {
                    return new Promise((resolve, reject) => {
                              exec(command, (error, stdout) => {
                                        if (error) {
                                                  reject(error);
                                        } else {
                                                  resolve(stdout);
                                        }
                              });
                    });
          };
          let audits;
          try {
                    await execPromise(lighthouseCommand);
                    const lighthouseOutput = await fs.readJson(
                              `./report/${fileName}.report.json`
                    );

                    audits = lighthouseOutput.audits;
          } catch (error) {
                    console.error(
                              `Erro ao executar o Lighthouse: ${error.message}`
                    );
          }
          return {
                    audits,
          };
}

module.exports = {
          lighthouseMetric,
};
