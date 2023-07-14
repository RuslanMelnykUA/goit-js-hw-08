import throttle from 'lodash.throttle';
const form = document.querySelector('form');
const storage_key = 'feedback-form-state';
form.elements[0].setAttribute('required', '');
form.elements[1].setAttribute('required', '');
const storageData = localStorage.getItem(storage_key);
if (storageData) {
  let storageDataObj = JSON.parse(storageData);
  form.email.value = storageDataObj.email;
  form.message.value = storageDataObj.message;
}
const storageDataUpdate = () => {
  localStorage.setItem(
    storage_key,
    JSON.stringify({
      email: form.email.value,
      message: form.message.value,
    })
  );
};
form.addEventListener('input', throttle(storageDataUpdate, 500));
const onSubmit = ev => {
  ev.preventDefault();
  console.log(JSON.parse(localStorage.getItem(storage_key)));
  localStorage.removeItem(storage_key);
  form.reset();
};
form.addEventListener('submit', onSubmit);