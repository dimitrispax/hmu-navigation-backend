"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston = require('winston');
require('winston-daily-rotate-file');
const { combine, timestamp, printf, colorize, align } = winston.format;
const errorFilter = winston.format((info, opts) => {
    return info.level === 'error' ? info : false;
});
const warnFilter = winston.format((info, opts) => {
    return info.level === 'warn' ? info : false;
});
const infoFilter = winston.format((info, opts) => {
    return info.level === 'info' ? info : false;
});
const httpFilter = winston.format((info, opts) => {
    return info.level === 'http' ? info : false;
});
const verboseFilter = winston.format((info, opts) => {
    return info.level === 'verbose' ? info : false;
});
const debugFilter = winston.format((info, opts) => {
    return info.level === 'debug' ? info : false;
});
const sillyFilter = winston.format((info, opts) => {
    return info.level === 'silly' ? info : false;
});
class WinstonLoggingHandler {
    constructor() {
        this.logger = winston.createLogger({
            levels: {
                error: 0,
                warn: 1,
                info: 2,
                http: 3,
                verbose: 4,
                debug: 5,
                silly: 6
            },
            //[27-01-2022 06:37:27.653 AM] info:      Info message
            format: combine(
            // colorize({ all: true }), 
            timestamp({
                format: 'DD-MM-YYYY hh:mm:ss.SSS A',
            }), align(), printf((info) => `[${info.timestamp}] ${info.level}: ${info.message}`)),
            exitOnError: false,
            transports: [
                new winston.transports.Console(),
                new winston.transports.DailyRotateFile({
                    filename: 'logs/a_error/error-%DATE%.log',
                    datePattern: 'DD-MM-YYYY',
                    level: 'error',
                    format: errorFilter()
                }),
                new winston.transports.DailyRotateFile({
                    filename: 'logs/b_warn/warn-%DATE%.log',
                    datePattern: 'DD-MM-YYYY',
                    level: 'warn',
                    format: warnFilter()
                }),
                new winston.transports.DailyRotateFile({
                    filename: 'logs/c_info/info-%DATE%.log',
                    datePattern: 'DD-MM-YYYY',
                    level: 'info',
                    format: infoFilter()
                }),
                new winston.transports.DailyRotateFile({
                    filename: 'logs/d_http/http-%DATE%.log',
                    datePattern: 'DD-MM-YYYY',
                    level: 'http',
                    format: httpFilter()
                }),
                new winston.transports.DailyRotateFile({
                    filename: 'logs/e_verbose/verbose-%DATE%.log',
                    datePattern: 'DD-MM-YYYY',
                    level: 'verbose',
                    format: verboseFilter()
                }),
                new winston.transports.DailyRotateFile({
                    filename: 'logs/f_debug/debug-%DATE%.log',
                    datePattern: 'DD-MM-YYYY',
                    level: 'debug',
                    format: debugFilter()
                }),
                new winston.transports.DailyRotateFile({
                    filename: 'logs/g_silly/silly-%DATE%.log',
                    datePattern: 'DD-MM-YYYY',
                    level: 'silly',
                    format: sillyFilter()
                }),
            ],
            exceptionHandlers: [
                new winston.transports.File({ filename: 'logs/exceptions.log' }),
            ],
            rejectionHandlers: [
                new winston.transports.File({ filename: 'logs/rejections.log' }),
            ],
        });
    }
    logError(object) {
        this.logger.error(object);
    }
    logWarn(object) {
        this.logger.warn(object);
    }
    logInfo(object) {
        this.logger.info(object);
    }
    logHttp(object) {
        this.logger.http(object);
    }
    logVerbose(object) {
        this.logger.verbose(object);
    }
    logDebug(object) {
        this.logger.debug(object);
    }
    logSilly(object) {
        this.logger.silly(object);
    }
}
exports.default = WinstonLoggingHandler;
//# sourceMappingURL=_winstonLoggingHandler.js.map