import { createLogger, Logger, transports, format, LogEntry } from "winston";

// Acts as global logger object as long as it's created by `initiaLogger` funciton
let logger: Logger | null = null;

const getEnvLevel = (env: string) => {
  switch (env) {
    case "production":
      return "warn";
    case "dotcomstg":
      return "warn";
    case "dotcomprd":
      return "warn";
    default:
      return "debug";
  }
};

/**
 * Returns a reusable global logger instance. If no logger exists yet, then
 * a new logger is created
 *
 * @returns logger
 */
const initiateLogger = () => {
  // Reuse global logger
  if (logger) {
    return logger;
  }

  logger = createLogger({
    transports: [
      new transports.Console({
        format: format.json(),
      }),
    ],
    level: getEnvLevel(process.env.ENV ?? "dev"),
  });

  logger.info("Logger created");

  return logger;
};

const getLevel = (level?: string) => level || "info";

export const log = (message: string, level?: string) => {
  const _logger = initiateLogger();
  const log: LogEntry = {
    level: getLevel(level),
    message: message,
  };
  if (level) {
    log["level"] = level;
  }
  _logger.log(log);
};
