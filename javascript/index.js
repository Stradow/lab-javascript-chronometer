const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
  printMilliseconds();
}

function printMilliseconds() {
  const milliseconds = chronometer.computeTwoDigitNumber(chronometer.getMilliseconds());
  milDec.innerHTML = milliseconds[0];
  milUni.innerHTML = milliseconds[1];
}

function printMinutes() {
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDec.innerHTML = minutes[0];
  minUni.innerHTML = minutes[1];
}

function printSeconds() {
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDec.innerHTML = seconds[0];
  secUni.innerHTML = seconds[1];
}
function printSplit() {
  const splitTime = chronometer.split();
  const li = document.createElement('li');
  li.innerHTML = splitTime;
  splits.appendChild(li);
}

function clearSplits() {
  splits.innerHTML = '';
}

function setStopBtn() {
  btnLeft.innerHTML = 'STOP';
  btnLeft.classList.toggle('start');
  btnLeft.classList.toggle('stop');
}


function setSplitBtn() {
  btnRight.innerHTML = 'SPLIT';
  btnRight.classList.toggle('reset');
  btnRight.classList.toggle('split');
}

function setStartBtn() {
  btnLeft.innerHTML = 'START';
  btnLeft.classList.toggle('start');
  btnLeft.classList.toggle('stop');
}

function setResetBtn() {
  btnRight.innerHTML = 'RESET';
  btnRight.classList.toggle('reset');
  btnRight.classList.toggle('split');
}

btnLeft.addEventListener('click', () => {
  if (btnLeft.classList.contains('start')) {
    setStopBtn();
    setSplitBtn();
    chronometer.start(printTime);
  } else {
    setStartBtn();
    setResetBtn();
    chronometer.stop();
  }
});


btnRight.addEventListener('click', () => {
  if (btnRight.classList.contains('reset')) {
    chronometer.reset();
    printTime();
    clearSplits();
  } else {
    printSplit();
  }
});