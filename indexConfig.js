const yargs = require('yargs');

const argv = yargs
          .option('url', {
                    description: 'URL to test',
                    type: 'string',
                    demandOption: true, // torna o argumento obrigatório
          })
          .option('strategy', {
                    description: 'Strategy to use',
                    type: 'string',
                    demandOption: true, // torna o argumento obrigatório
          })
          .option('informative', {
                    description: 'Informative flag',
                    type: 'boolean',
                    default: false, // valor padrão
          }).argv;

const url = argv.url;
const strategy = argv.strategy;
const informative = argv.informative;

module.exports = {
          url,
          strategy,
          informative,
};
