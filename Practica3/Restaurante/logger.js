const {createLogger, format, transports} = require("winston");

const logger = createLogger({
  level: "debug",
  format: format.json(),
  transports: [new transports.Console(),
    new transports.File({filename:'error.log', level:"error"}),
    new transports.File({filename:'app.log', level:"info"})
],
});

module.exports = logger;