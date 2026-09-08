const footerForm = document.querySelector('.footer__form');
const footerInput = document.querySelector('.footer__input');
 
footerForm.addEventListener('submit', function (event) {
  event.preventDefault(); 
 
  
  if (!footerForm.checkValidity()) {
    footerInput.reportValidity();
    return;
  }
 
  const emailValue = footerInput.value.trim();
 
  const result = {
    email: emailValue
  };
 
  console.log(result);
 
  footerForm.reset();
});
 

let user = null; 
 
const openModalBtn = document.querySelector('.register-btn');
const closeModalBtn = document.querySelector('.modal__close-btn');
const modalOverlay = document.querySelector('.modal');
const registerForm = document.querySelector('.modal__form');
 
const passwordInput = document.getElementById('reg-password');
const passwordConfirmInput = document.getElementById('reg-password-confirm');
 

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
    alert('Регистрация отклонена: заполните все поля корректно.');
    return;
  }
 
  
  if (passwordInput.value !== passwordConfirmInput.value) {
    alert('Регистрация отклонена: пароли не совпадают!');
    return;
  }
 
  
  const name = document.getElementById('reg-name').value.trim();
  const surname = document.getElementById('reg-surname').value.trim();
  const birthDate = document.getElementById('reg-birth').value;
  const login = document.getElementById('reg-login').value.trim();
 
  
  user = {
    name: name,
    surname: surname,
    birthDate: birthDate,
    login: login,
    password: passwordInput.value,
    createdOn: new Date() 
  };
 
  
  console.log('Успешная регистрация:', user);
 
  
  closeModal();
});