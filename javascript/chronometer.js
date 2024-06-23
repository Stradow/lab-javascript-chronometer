class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if (callback) callback();
    }, 10); // Change interval to 10 ms for milliseconds
  }

  getMinutes() {
    return Math.floor(this.currentTime / 6000); // 6000 ms in a minute
  }

  getSeconds() {
    return Math.floor(this.currentTime / 100) % 60; // 100 ms in a second
  }

  getMilliseconds() {
    return this.currentTime % 100;
  }

  computeTwoDigitNumber(value) {
    return String(value).padStart(2, '0');
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    const milliseconds = this.computeTwoDigitNumber(this.getMilliseconds());
    return `${minutes}:${seconds}:${milliseconds}`;
  }
}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
