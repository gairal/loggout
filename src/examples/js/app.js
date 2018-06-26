import Loggout from '@/Loggout';
import Examples from './Examples';

const init = () => {
  const loggout = Loggout.factory({
    level: Loggout.LEVELS.debug,
  });
  const ex = new Examples(loggout);
  ex.init();
};

/* eslint-disable-next-line no-confusing-arrow */
((g, a) => g.readyState === 'loading' ? g.addEventListener('DOMContentLoaded', a) : a())(document, init);
