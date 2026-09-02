// 3.Создайте объект на основе ваших данных. 
const userProfile = {
  firstName: "Фатима",
  lastName: "Кочкарова",
  email: "kochkarova@example.com",
  jobTitle: "Frontend Developer",
  country: "Россия",
  city: "Москва",
  relationshipStatus: "замужем",
  isAvailableForFreelance: true
};


// 4.Создайте объект, который будет хранить данные об автомобиле
const carDetails = {
  brand: "Toyota",
  model: "Camry",
  year: 2021,
  color: "черный",
  transmission: "автомат"
};
carDetails.owner = userProfile;


// 5.Написать функцию которая аргументом будет принимать объект, описанный в пункте №4. 
function checkMaxSpeed(carObj) {
  if ('maxSpeed' in carObj) {
    return; 
  }
  carObj.maxSpeed = 220; 
}


// 6.Написать функцию, которая получает первым аргументом — объект, а вторым аргументом — свойство объекта, которое нужно вывести и выводит его значение.
function getPropertyValue(obj, key) {
  console.log(obj[key]);
}

getPropertyValue(carDetails, 'brand'); 
getPropertyValue(carDetails, 'color'); 


// 7.Создать массив, который содержит названия продуктов (просто строки)
const foodProducts = ["Молоко", "Хлеб", "Яблоко", "Сыр"];


// 8.Создать массив, состоящий из объектов, где объект представляет собой книгу (название, автор, год выпуска, цвет обложки, жанр) (3-5 книг). 
const bookList = [
  {
    title: "Гарри Поттер и философский камень",
    author: "Дж. К. Роулинг",
    year: 1997,
    coverColor: "красный",
    genre: "фэнтези"
  },
  {
    title: "Хоббит",
    author: "Дж. Р. Р. Толкин",
    year: 1937,
    coverColor: "зеленый",
    genre: "фэнтези"
  },
  {
    title: "1984",
    author: "Джордж Оруэлл",
    year: 1949,
    coverColor: "серый",
    genre: "антиутопия"
  }
];

bookList.push({
  title: "Мастер и Маргарита",
  author: "Михаил Булгаков",
  year: 1967,
  coverColor: "черный",
  genre: "роман"
});
// 9.Создать еще один массив, состоящих из тех же книг, но относящийся к определенной вселенной (Гарри Поттер, Марвел и так далее). 
const harryPotterUniverse = [
  {
    title: "Гарри Поттер и Тайная комната",
    author: "Дж. К. Роулинг",
    year: 1998,
    coverColor: "зеленый",
    genre: "фэнтези"
  },
  {
    title: "Гарри Поттер и узник Азкабана",
    author: "Дж. К. Роулинг",
    year: 1999,
    coverColor: "фиолетовый",
    genre: "фэнтези"
  },
  {
    title: "Гарри Поттер и Кубок огня",
    author: "Дж. К. Роулинг",
    year: 2000,
    coverColor: "кубок",
    genre: "фэнтези"
  }
];

const allBooks = [...bookList, ...harryPotterUniverse];


// 10.Почитать про метод массива — map. Написать функцию, которая принимает массив сущностей с задания №9.
function markRareBooks(booksArray) {
  return booksArray.map(book => {
    return {
      ...book,
      isRare: book.year > 2000
    };
  });
}

const updatedBooksList = markRareBooks(allBooks);
console.log(updatedBooksList);
