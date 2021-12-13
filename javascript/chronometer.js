let chronometer;

class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start() {
    // ... your code goes here
    setTimeout(() => {
      this.currentTime += 1;
    }, 1000);
    if (this.currentTime === 3) {
      return 3;
    }
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    // ... your code goes here
    return this.getMinutes % 60;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if (value === 0) {
      return '00';
    }
    return this.getMinutes.toString();
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    return (this.currentTime = 0);
  }

  split() {
    // ... your code goes here
    return;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
