const footerForm = document.querySelector('.footer__form');
const footerInput = document.querySelector('.footer__input');


const openModalBtn = document.querySelector('.register-btn');
const closeModalBtn = document.querySelector('.modal__close-btn');
const modalOverlay = document.querySelector('.overlay.modal'); 

const registerForm = document.querySelector('.modal__form');
const nameInput = document.getElementById('reg-name');
const surnameInput = document.getElementById('reg-surname');
const birthDateInput = document.getElementById('reg-birth');
const loginInput = document.getElementById('reg-login');
const passwordInput = document.getElementById('reg-password');
const passwordConfirmInput = document.getElementById('reg-password-confirm');

let user = null; 


footerForm.addEventListener('submit', function (event) {
  event.preventDefault(); 
 
  if (!footerForm.checkValidity()) {
    footerForm.reportValidity();
    return;
  }
 
  const emailValue = footerInput.value.trim();
  const result = { email: emailValue };
 
  console.log(result);
  footerForm.reset();
});



openModalBtn.addEventListener('click', () => {
  modalOverlay.classList.add('modal-showed');
});
 

const closeModal = () => {
  modalOverlay.classList.remove('modal-showed');
  registerForm.reset();
};
 
closeModalBtn.addEventListener('click', closeModal);
 

modalOverlay.addEventListener('click', (event) => {
  if (event.target === modalOverlay) {
    closeModal();
  }
});
 

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modalOverlay.classList.contains('modal-showed')) {
    closeModal();
  }
});


registerForm.addEventListener('submit', (event) => {
  event.preventDefault(); 

 
  if (!registerForm.checkValidity()) {
    registerForm.reportValidity();
    console.log('Регистрация отклонена: заполните все поля корректно.');
    return;
  }
 
 
  const name = nameInput.value.trim();
  const surname = surnameInput.value.trim();
  const birthDate = birthDateInput.value;
  const login = loginInput.value.trim();
  const password = passwordInput.value;
  const passwordConfirm = passwordConfirmInput.value;

  
  if (password !== passwordConfirm) {
    alert('Ошибка: Пароли не совпадают! Пожалуйста, повторите ввод.');
    console.log('Регистрация отклонена: пароли не совпадают!');
    passwordConfirmInput.focus();
    return;
  }
 
  
  user = {
    name: name,
    surname: surname,
    birthDate: birthDate,
    login: login,
    password: '*'.repeat(password.length) 
  };

  console.log('Успешная регистрация:', user);
  
  closeModal();
});
