const app = require('./app');
const Loggger = require('./logger');
const logger = new Loggger(process.env.NODE_ENV).logger;
const PORT = process.env.PORT || 3010;
const HOST = process.env.HOST || '127.0.0.1';
const BACKLOG = process.env.BACKLOG || 1023;

app.listen(PORT, HOST, BACKLOG, () => {
  const _app = new Promise((resolve, reject) => {
    if (resolve) {
      resolve(
        'Welcome to Node, Express, Objection JS. Made in NodeJS with ❤️ '
      );
    } else {
      reject(process.exit(-1));
    }
  });
  _app
    .then((run) => {
      logger.info(`App is running on PORT : [${PORT}] : [${run}]`);
    })
    .catch((error) => {
      logger.error(`App is crash : [${error}]`);
    });
});
