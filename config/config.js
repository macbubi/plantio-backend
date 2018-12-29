const devConfig = require('./config.dev');
const stagingConfig = require('./config.staging');
const productionConfig = require('./config.production');
let envConfig;

let commonConfig = {

};

function checkSecureVars() {
  if(!process.env.DB_CRED) {
    throw new Error('no DB_CRED provided');
  }
}

function getConfig(env) {
  switch (env) {
    case 'production':
      checkSecureVars();
      envConfig = productionConfig
      break;
    case 'staging':
      checkSecureVars();
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