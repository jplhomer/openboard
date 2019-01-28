module.exports = {
  target: "serverless",
  publicRuntimeConfig: {
    isProduction: process.env.IS_NOW
  }
};
