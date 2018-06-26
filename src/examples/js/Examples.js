import Butt from './Butt';

export default class Examples {
  constructor(loggout) {
    this.loggout = loggout;
  }

  init() {
    Butt.factory('debug', () => {
      this.loggout.debug('test debug');
    });

    Butt.factory('info', () => {
      this.loggout.info('test info');
    });

    Butt.factory('log', () => {
      this.loggout.log('test log');
    });

    Butt.factory('warn', () => {
      this.loggout.warn('test warn', 'warny');
    });

    Butt.factory('error', () => {
      this.loggout.error('test error');
    });

    Butt.factory('timer', () => {
      const timelyMeth = () => {
        let incr = 0;
        for (let i = 1; i <= 1e6; i += 1) {
          incr += i;
        }
        this.loggout.log(incr);
      };
      this.loggout.time(timelyMeth);
    });
  }
}
