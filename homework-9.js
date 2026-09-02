//2.Создать массив чисел от 1 до 10. Отфильтровать его таким образом, что бы мы получил массив чисел, начиная с 5.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredNumbers = numbers.filter((num) => num >= 5);
console.log(filteredNumbers);


//3.Создать массив строк, относящихся к любой сущности (название фильмов/книг, кухонные приборы, мебель и т.д.), проверить, есть ли в массиве какая-то определенная сущность.
const movies = ["Форрест Гамп", "Титаник", "Криминальное чтиво"];
const isMovieInArray = movies.includes("Титаник");
console.log(isMovieInArray);

//4. Написать функцию, которая аргументом будет принимать массив и изменять его порядок на противоположный ("переворачивать") . Два вышеуказанных массива с помощью этой функции перевернуть.
function reverseArray(arr) {
  return arr.reverse();
}

const reversedNumbers = reverseArray(numbers);
console.log(reversedNumbers);

const reversedFilteredNumbers = reverseArray(filteredNumbers);
console.log(reversedFilteredNumbers);



//Вывести в консоль массив тех комментариев, почта пользователей которых содержит ".com"

import { socialComments } from './comments.js';

const comComments = socialComments.filter(comment => comment.email.includes('.com'));

console.log( comComments);

//8.Перебрать массив таким образом, что бы пользователи с id меньше или равно 5 имели postId: 2, а те, у кого id больше 5, имели postId: 1

import { socialComments } from './comments.js';

const updatedComments = socialComments.map(comment => {
  return {
    ...comment,
    postId: comment.id <= 5 ? 2 : 1 
  };
});

console.log(updatedComments);

//9.Перебрать массив, что бы объекты состояли только из айди и имени

import { socialComments } from './comments.js';

const shortenedComments = socialComments.map(comment => {
  return {
    id: comment.id,
    name: comment.name
  };
});


console.log(shortenedComments);


//10.Перебираем массив, добавляем объектам свойство isInvalid и проверяем: если длина тела сообщения (body) больше 180 символов - устанавливаем true, меньше - false.

import { socialComments } from './comments.js';

const validatedComments = socialComments.map(comment => {
  return {
    ...comment, 
    isInvalid: comment.body.length > 180 
  };
});

console.log(validatedComments);

//11.Почитать про метод массива reduce. Используя его, вывести массив почт и провернуть тоже самое с помощью метода map

import { socialComments } from './comments.js';
const emailsWithMap = socialComments.map(comment => comment.email);
console.log(emailsWithMap);



const emailsWithReduce = socialComments.reduce((accumulator, comment) => {
  accumulator.push(comment.email);
  
  return accumulator;
}, []); 

console.log(emailsWithReduce);

//12.Почитать про методы toString(), join() и перебрав массив с задания №11, привести его к строке.

import { socialComments } from './comments.js';

const emailsArray = socialComments.map(comment => comment.email);
const stringViaToString = emailsArray.toString();

console.log(stringViaToString); 


const stringViaJoin = emailsArray.join(', ');

console.log(stringViaJoin);


const stringWithNewLines = emailsArray.join('\n');

console.log(stringWithNewLines);
