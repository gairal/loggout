import mockConsole from 'jest-mock-console';
import Loggout from '@/Loggout';

describe('Logger', () => {
  mockConsole();
  const logger = Loggout.factory({ logLevel: 20 });

  it('Is instanciated', () => {
    expect(logger).toBeInstanceOf(Loggout);
  });

  it('Debugs', () => {
    logger.level = Loggout.LEVELS.debug;
    expect(logger.debug('TEST')).toBeTruthy();
    expect(logger.log('TEST')).toBeTruthy();
    expect(logger.info('TEST')).toBeTruthy();
    expect(logger.warn('TEST')).toBeTruthy();
    expect(logger.error('TEST')).toBeTruthy();
  });

  it('Logs', () => {
    logger.level = Loggout.LEVELS.log;
    expect(logger.debug('TEST')).toBeFalsy();
    expect(logger.log('TEST')).toBeTruthy();
    expect(logger.info('TEST')).toBeTruthy();
    expect(logger.warn('TEST')).toBeTruthy();
    expect(logger.error('TEST')).toBeTruthy();
  });

  it('Infos', () => {
    logger.level = Loggout.LEVELS.info;
    expect(logger.debug('TEST')).toBeFalsy();
    expect(logger.log('TEST')).toBeFalsy();
    expect(logger.info('TEST')).toBeTruthy();
    expect(logger.warn('TEST')).toBeTruthy();
    expect(logger.error('TEST')).toBeTruthy();
  });

  it('Warns', () => {
    logger.level = Loggout.LEVELS.warn;
    expect(logger.debug('TEST')).toBeFalsy();
    expect(logger.log('TEST')).toBeFalsy();
    expect(logger.info('TEST')).toBeFalsy();
    expect(logger.warn('TEST')).toBeTruthy();
    expect(logger.error('TEST')).toBeTruthy();
  });

  it('Errors', () => {
    logger.level = Loggout.LEVELS.error;
    expect(logger.debug('TEST')).toBeFalsy();
    expect(logger.log('TEST')).toBeFalsy();
    expect(logger.info('TEST')).toBeFalsy();
    expect(logger.warn('TEST')).toBeFalsy();
    expect(logger.error('TEST')).toBeTruthy();
  });

  it('Doesn\'t break', () => {
    logger.level = 777;
    expect(logger.prefix()).toEqual('');
    expect(logger.debug('TEST')).toBeFalsy();
    expect(logger.log('TEST')).toBeFalsy();
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

    expect(logger.debug('TEST')).toBeTruthy();
    expect(logger.log('TEST')).toBeTruthy();
    expect(logger.info('TEST')).toBeTruthy();
    expect(logger.warn('TEST')).toBeTruthy();
    expect(logger.error('TEST')).toBeTruthy();
  });
});
