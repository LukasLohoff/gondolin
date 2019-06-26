import * as winston from 'winston';
import * as moment from 'moment';
const environment: string = process.env.NODE_ENV || 'production';
import * as path from 'path';

// gondolin/logs
const logPath = path.resolve(__dirname) + '/../log';
const CONSOLE_LOGLEVEL = 'silly';

const {
  transports,
  format,
  createLogger
} = winston;

const levels = {
  silly: 5,
  sequelize: 4,
  debug: 3,
  info: 2,
  warn: 1,
  error: 0
};

const consoleFormat = format.printf((info) => {
  const timestamp = moment().format('DD.MM.YY hh:mm:ss.SSS');
  return `${timestamp} [${info.level}]: ${info.message}`;
});

const logger: winston.Logger = createLogger({
  level: 'debug',
  levels,
  format: format.combine(
    format.timestamp(),
    format.json()
  ),
  transports: [
    // - Write all logs error (and below) to `error.log`.
    new transports.File({
      filename: `${logPath}/error.log`,
      level: 'error'
    }),
    // - Write to all logs with level `debug` and below to `debug.log`
    new transports.File({
      filename: `${logPath}/debug.log`
    })
  ],
  exitOnError: false // do not exit on handled exceptions
});

// If we're not in production then log to the `console`
if (environment !== 'production') {

  winston.addColors({
    silly: 'bold white',
    sequelize: 'bold magenta',
    debug: 'bold cyan',
    info: 'bold green',
    warn: 'bold yellow',
    error: 'bold red'
  });

  logger.add(new transports.Console({
    format: format.combine(
      format.colorize(),
      consoleFormat
    ),
    level: CONSOLE_LOGLEVEL
  }));
}

export default logger;
