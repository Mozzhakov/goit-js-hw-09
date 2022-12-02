import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const startBtn = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    let nowDate = new Date();
    let userDate = selectedDates[0];
    let timeDifference = userDate - nowDate;
    if (timeDifference < 0) {
      Notify.failure('Please choose a date in the future');
      return;
    }

    startBtn.disabled = false;

    startBtn.addEventListener('click', () => {
      const timeInterval = setInterval(() => {
        const timeDifference = userDate - getNowDate();
        renderTime(convertMs(timeDifference));
        if (timeDifference <= 0) {
          clearInterval(timeInterval);
          resetTimer();
        }
      }, 1000);
      startBtn.disabled = true;
    });
  },
};

const pickedTime = flatpickr('#datetime-picker', options);

function getNowDate() {
  return new Date();
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function renderTime({ days, hours, minutes, seconds }) {
  daysEl.innerHTML =
    days === 0 ? '00' : days < 10 ? addLeadingZero(days) : days;
  hoursEl.innerHTML = addLeadingZero(hours);
  minutesEl.innerHTML = addLeadingZero(minutes);
  secondsEl.innerHTML = addLeadingZero(seconds);
}

function resetTimer() {
  daysEl.innerHTML = '00';
  hoursEl.innerHTML = '00';
  minutesEl.innerHTML = '00';
  secondsEl.innerHTML = '00';
}
