export interface ILogger {
  info(msg: string): void;
  error(msg: string): void;
  warn(msg: string): void;
  debug(msg: string): void;
}

export const LoggerToken = Symbol('logger-token');
