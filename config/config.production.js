if(!process.env.DB_CRED) {
  throw new Error('no DB_CRED provided');
}

module.exports = {
  mongodbURI: `mongodb://${process.env.DB_CRED}@ds047865.mlab.com:47865/plantio-staging`,
}