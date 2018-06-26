import mockConsole from 'jest-mock-console';
import Loggout from '@/Loggout';

describe('Logger', () => {
  mockConsole();
  const logger = Loggout.factory({ logLevel: 20 });

  it('Is instanciated', () => {
    expect(logger).toBeInstanceOf(Loggout);
  });

  it('Sillies', () => {
    logger.level = Loggout.LEVELS.silly;
    expect(logger.silly('TEST')).toBeTruthy();
    expect(logger.debug('TEST')).toBeTruthy();
    expect(logger.verbose('TEST')).toBeTruthy();
    expect(logger.info('TEST')).toBeTruthy();
    expect(logger.warn('TEST')).toBeTruthy();
    expect(logger.error('TEST')).toBeTruthy();
  });
  it('Debugs', () => {
    logger.level = Loggout.LEVELS.debug;
    expect(logger.silly('TEST')).toBeFalsy();
    expect(logger.debug('TEST')).toBeTruthy();
    expect(logger.verbose('TEST')).toBeTruthy();
    expect(logger.info('TEST')).toBeTruthy();
    expect(logger.warn('TEST')).toBeTruthy();
    expect(logger.error('TEST')).toBeTruthy();
  });

  it('Verboses', () => {
    logger.level = Loggout.LEVELS.verbose;
    expect(logger.silly('TEST')).toBeFalsy();
    expect(logger.debug('TEST')).toBeFalsy();
    expect(logger.verbose('TEST')).toBeTruthy();
    expect(logger.info('TEST')).toBeTruthy();
    expect(logger.warn('TEST')).toBeTruthy();
    expect(logger.error('TEST')).toBeTruthy();
  });

  it('Infos', () => {
    logger.level = Loggout.LEVELS.info;
    expect(logger.silly('TEST')).toBeFalsy();
    expect(logger.debug('TEST')).toBeFalsy();
    expect(logger.verbose('TEST')).toBeFalsy();
    expect(logger.info('TEST')).toBeTruthy();
    expect(logger.warn('TEST')).toBeTruthy();
    expect(logger.error('TEST')).toBeTruthy();
  });

  it('Warns', () => {
    logger.level = Loggout.LEVELS.warn;
    expect(logger.silly('TEST')).toBeFalsy();
    expect(logger.debug('TEST')).toBeFalsy();
    expect(logger.verbose('TEST')).toBeFalsy();
    expect(logger.info('TEST')).toBeFalsy();
    expect(logger.warn('TEST')).toBeTruthy();
    expect(logger.error('TEST')).toBeTruthy();
  });

  it('Errors', () => {
    logger.level = Loggout.LEVELS.error;
    expect(logger.silly('TEST')).toBeFalsy();
    expect(logger.debug('TEST')).toBeFalsy();
    expect(logger.verbose('TEST')).toBeFalsy();
    expect(logger.info('TEST')).toBeFalsy();
    expect(logger.warn('TEST')).toBeFalsy();
    expect(logger.error('TEST')).toBeTruthy();
  });

  it('Doesn\'t break', () => {
    logger.level = 777;
    expect(logger.prefix()).toEqual('');
    expect(logger.silly('TEST')).toBeFalsy();
    expect(logger.debug('TEST')).toBeFalsy();
    expect(logger.verbose('TEST')).toBeFalsy();
    expect(logger.info('TEST')).toBeFalsy();
    expect(logger.warn('TEST')).toBeFalsy();
    expect(logger.error('TEST')).toBeFalsy();
  });

  it('Times', () => {
    expect(logger.time(() => {})).toBeTruthy();
  });

  it('Has fallback', () => {
    logger.level = Loggout.LEVELS.debug;
    console.debug = null;
    console.info = null;
    console.warn = null;
    console.error = null;

    expect(logger.silly('TEST')).toBeTruthy();
    expect(logger.debug('TEST')).toBeTruthy();
    expect(logger.verbose('TEST')).toBeTruthy();
    expect(logger.info('TEST')).toBeTruthy();
    expect(logger.warn('TEST')).toBeTruthy();
    expect(logger.error('TEST')).toBeTruthy();
  });
});
