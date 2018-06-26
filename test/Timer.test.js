import mockConsole from 'jest-mock-console';
import Timer from '@/Timer';

describe('Logger', () => {
  mockConsole();
  const timer = new Timer(() => {});
  it('Is instanciated', () => {
    expect(timer).toBeInstanceOf(Timer);
  });

  it('Times', () => {
    expect(timer.exec(() => {})).toBeTruthy();
  });

  it('Times even if the console doesn\'t implement it', () => {
    console.time = null;
    console.timeEnd = null;
    expect(timer.exec(() => {})).toBeTruthy();
  });
});
