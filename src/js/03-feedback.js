import Throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const email = form.querySelector('[name="email"]');
const message = form.querySelector('[name="message"]');
const localKey = 'feedback-form-state';
form.addEventListener('input', Throttle(storageFormData, 500));
form.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();
  // const { email, message } = event.currentTarget.elements;
  // вывести в консоль в1
  //   console.log({ email: email.value, message: message.value });
  // вывести в консоль в2
  const savedData = JSON.parse(localStorage.getItem(localKey));
  console.dir(savedData);
  localStorage.removeItem(localKey);
  event.currentTarget.reset();
}
function storageFormData(event) {
  const formValue = { email: '', message: '' };
  if (localStorage.getItem(localKey)) {
    Object.assign(formValue, JSON.parse(localStorage.getItem(localKey)));
  }
  //   console.log('name input:', event.target.name);
  //   console.log('value input:', event.target.value);
  formValue[event.target.name] = event.target.value;
  //   console.log(formValue);
  localStorage.setItem(localKey, JSON.stringify(formValue));
}