import mockConsole from 'jest-mock-console';
import Loggout from '@/Loggout';
import App from '@/app';

describe('App', () => {
  mockConsole();
  const app = App.factory();

  it('Is instanciated', () => {
    expect(app).toBeInstanceOf(Loggout);
  });
});
