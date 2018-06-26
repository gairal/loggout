import Timer from './Timer';

export default class Loggout {
  constructor(opts) {
    const defaultOpts = {
      level: Loggout.LEVELS.error,
      prefix: (level) => {
        const ts = Date.now();
        switch (level) {
          case Loggout.LEVELS.debug:
            return `DEBUG - ${ts}:`;
          case Loggout.LEVELS.log:
            return `LOG - ${ts}:`;
          case Loggout.LEVELS.info:
            return `INFO - ${ts}:`;
          case Loggout.LEVELS.warn:
            return `WARN - ${ts}:`;
          case Loggout.LEVELS.error:
            return `ERROR - ${ts}:`;
          default:
            return '';
        }
      },
    };

    this.opts = { ...defaultOpts, ...opts };

    this.timer = new Timer(() => {});

    this.LEVEL_NAMES = {
      10: 'debug',
      20: 'log',
      30: 'info',
      40: 'warn',
      50: 'error',
    };
  }

  /**
   * Level prop
   *
   * @readonly
   * @memberof Loggout
   */
  get level() {
    return this.opts.level;
  }

  /**
   * Set current logger level
   *
   * @memberof Loggout
   */
  set level(level) {
    this.opts.level = level;
  }

  /**
   * LePrefixvel prop
   *
   * @readonly
   * @memberof Loggout
   */
  get prefix() {
    return this.opts.prefix;
  }

  /**
   * Levels scale
   *
   * @readonly
   * @static
   * @memberof Loggout
   */
  static get LEVELS() {
    return {
      debug: 10,
      log: 20,
      info: 30,
      warn: 40,
      error: 50,
    };
  }

  /**
   * Check the level of the method compared to the level of the instance
   *
   * @param {*} level
   * @returns
   * @memberof Loggout
   */
  isLoggable(level) {
    return this.level <= level;
  }

  /**
   * Base log method
   *
   * @param {*} level
   * @param {*} args
   * @returns
   * @memberof Loggout
   */
  write(level, args) {
    if (!this.isLoggable(level)) return false;

    const levelName = this.LEVEL_NAMES[level];
    const prefix = this.prefix(level);
    if (console[levelName]) {
      console[levelName](prefix, ...args);
    } else {
      console.log(prefix, ...args);
    }
    return true;
  }

  debug(...args) {
    return this.write(Loggout.LEVELS.debug, args);
  }

  log(...args) {
    return this.write(Loggout.LEVELS.log, args);
  }

  info(...args) {
    return this.write(Loggout.LEVELS.info, args);
  }

  warn(...args) {
    return this.write(Loggout.LEVELS.warn, args);
  }

  error(...args) {
    return this.write(Loggout.LEVELS.error, args);
  }

  time(meth, message) {
    this.timer.meth = meth;
    this.timer.message = message;
    this.timer.exec();
    return true;
  }

  /**
   * Static factory method returning an instance of the logger
   *
   * @static
   * @param {*} opts
   * @returns
   * @memberof Loggout
   */
  static factory(opts) {
    return new Loggout(opts);
  }
}
