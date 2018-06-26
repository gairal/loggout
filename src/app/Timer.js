export default class Timer {
  constructor(meth, message = '') {
    this.meth = meth;
    this.message = message;

    this.startTime = null;
    this.endTime = null;
  }

  get msg() {
    return this.message || this.meth.name || 'TIMER';
  }

  start() {
    if (console.time) {
      console.time(this.msg);
    } else {
      this.startTime = new Date().getTime();
    }

    return true;
  }

  end() {
    if (console.timeEnd) {
      console.timeEnd(this.msg);
    } else {
      this.endTime = new Date().getTime();
      console.log(this.msg, this.endTime - this.startTime);
    }
    return true;
  }

  exec() {
    this.start();
    this.meth();
    this.end();
    return true;
  }
}
