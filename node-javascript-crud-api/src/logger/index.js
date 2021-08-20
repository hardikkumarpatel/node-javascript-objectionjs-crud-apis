const devlogger = require('./dev.logger');

module.exports = class Loggger {
  env = '';
  logger = undefined;
  constructor(env) {
    this.env = env;
    this.getDevLogger(this.env);
  }

  getDevLogger(env) {
    if (env === 'dev') {
      this.logger = devlogger();
    }
  }
};
