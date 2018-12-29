const devConfig = require('./config.dev');
const stagingConfig = require('./config.staging');
const productionConfig = require('./config.production');
let envConfig;

let commonConfig = {

};


function getConfig(env) {
  switch (env) {
    case 'production':
      envConfig = productionConfig
      break;
    case 'staging':
      envConfig = stagingConfig
      break;
    default:
      envConfig = devConfig
  }
  
  return {
    ...commonConfig,
    ...envConfig
  }
}

module.exports = getConfig(process.env.NODE_ENV);