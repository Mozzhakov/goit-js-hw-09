const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const INTERVAL = 1000;
let changeColorInterval = null;

startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopBtnClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onStartBtnClick() {
  document.body.style.backgroundColor = getRandomHexColor();
  changeColorInterval = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, INTERVAL);
  startBtn.disabled = true;
}

function onStopBtnClick() {
  clearInterval(changeColorInterval);
  //   document.body.style.backgroundColor = '#FFFFFF';
  startBtn.disabled = false;
}
