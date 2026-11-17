const productCards = document.querySelectorAll('.card-container');
const changeColorAllButton = document.querySelector('#change-color-all-card');
const greenColorHash = '#00FF00';
const redColorHash = '#FF0000';

changeColorAllButton.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = greenColorHash)
})




const firstProductCard = document.querySelector('.card-container');
const changeColorFirstButton = document.querySelector('#change-color-first-card');

changeColorFirstButton.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = redColorHash;
})


const openGoogleButton = document.querySelector('#open-google');

openGoogleButton.addEventListener('click', openGoogle);
function openGoogle() {
  const answer = confirm('Вы хотите открыть страницу Google?');

  if (answer === true) {
    window.open('https://www.google.com');
  } else {
    return;
  }
}



const logMessageButton = document.querySelector('#log-message');

logMessageButton.addEventListener('click', () => logMessage('ДЗ выполнено!'));

function logMessage(message) {
  alert(message);
  console.log('message');
}

import './comments.js';
import './products.js';
import './homework-8.js';
import './homework-9.js';
import './homework-10.js';
import './homework-11.js';

import { Modal } from './Modal.js';
import { Form } from './Form.js';
import { SkincareProduct } from './BeautyProduct.js';

const mousse = new SkincareProduct(
  'Увлажняющий мусс',
  'для нормальной кожи',
  2750,
  ['активные ингредиенты', 'витамины С, А, РР, В И Е', 'солнцезащитные компоненты']
);
console.log(mousse.getFullCardInfo());

const registerModal = new Modal('registration-modal');
const registerForm = new Form('registration-form');
const footerForm = new Form('footer-form');

const openModalBtn = document.querySelector('.register-btn');
let user = null;

openModalBtn?.addEventListener('click', () => {
  registerModal.open();
});

registerForm.form?.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!registerForm.isValid()) {
    console.log('Регистрация отклонена: заполните все поля корректно.');
    return;
  }

  const values = registerForm.getValues();

  if (values.password !== values.passwordConfirm) {
    alert('Ошибка: Пароли не совпадают! Пожалуйста, повторите ввод.');
    console.log('Регистрация отклонена: пароли не совпадают!');
    document.getElementById('reg-password-confirm')?.focus();
    return;
  }

  user = {
    name: values.name,
    surname: values.surname,
    birthDate: values.birthDate,
    login: values.login,
    password: '*'.repeat(values.password.length),
  };

  console.log('Успешная регистрация:', user);
  registerForm.reset();
  registerModal.close();
});

footerForm.form?.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!footerForm.isValid()) return;

  const { email } = footerForm.getValues();
  console.log({ email });
  footerForm.reset();
});