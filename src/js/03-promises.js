import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');
form.addEventListener('submit', onFormSubmit);

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      resolve({ position, delay });
    } else {
      reject({ position, delay });
    }
  });
  promise
    .then(({ position, delay }) => {
      Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}

function onFormSubmit(e) {
  e.preventDefault();
  const formElements = e.currentTarget.elements;

  const delay = numberedValue(formElements.delay.value);
  const step = numberedValue(formElements.step.value);
  const amount = numberedValue(formElements.amount.value);

  let currentAmount = 0;

  setTimeout(() => {
    const interval = setInterval(() => {
      currentAmount += 1;
      if (currentAmount === amount) {
        clearInterval(interval);
      }
      createPromise(currentAmount, step);
    }, step);
  }, delay);
}

function numberedValue(value) {
  return Number(value);
}
