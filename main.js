// Покраска всех карточек

const productCards = document.querySelectorAll('.card-container');
const changeColorAllButton = document.querySelector('#change-color-all-card');
const greenColorHash = '#00FF00';
const redColorHash = '#FF0000';

changeColorAllButton.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = greenColorHash)
})


// Покраска первой карточки

const firstProductCard = document.querySelector('.card-container');
const changeColorFirstButton = document.querySelector('#change-color-first-card');

changeColorFirstButton.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = redColorHash;
})

// Открытие страницу Google.com

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

// Вывод сообщения в консоль лог

const logMessageButton = document.querySelector('#log-message');

logMessageButton.addEventListener('click', () => logMessage('ДЗ выполнено!'));

function logMessage(message) {
  alert(message);
  console.log('message');
}

