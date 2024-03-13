// Ctrl + K + C - закоментувати рядки
// Ctrl + K + U - розкоментувати рядки

/* ============================ Theory
Масиви це колекція елементів - контейнер
краще використовувати const

const array = [1, 2, 3, 5, 20, 42, 111]; // класичний спосіб створення масиву
// const arrayStrings = ['a', 'b', 'c', null, 12];
// const array = new Array(1, 2, 3, 5, 20, 42); // другий спосіб створення масиву

// сonsole.log(array);
// console.log(array.length); // через точку можна дізнаватися властивості
// в Chrome числа number підсвічуються фіолетовим кольором
// в Chrome строчка string підсвічуються бірюзовим кольором

console.log(array[0]); // дізнатися елемент по індексу 0 це перший
// console.log(array[10]); // undefined немає такого елемента
console.log(array[array.length - 1]); // array[6] отримати остінній елемент масиву
array[0] = 'Privet'; // перезаписоти значення елементу в масиві
array[array.length] = 'becon'; // додавати елемент у масив, краще так не робити
console.log(array);
*/

// ============================ Practika Program Notes
const inputElement = document.getElementById('title');
const createBtn = document.getElementById('create');
const listElement = document.getElementById('list');

// ${inputElement.value}

// ============================ Program Notes basis

// const notes = ['Записать блог про масиви', 'Расказать теорию обектов'];

// function render() {
//   for (let i = 0; i < notes.length; i++) {
//     listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i]));
//   }
//   //   for (let note of notes) {
//   //     listElement.insertAdjacentHTML('beforeend', getNoteTemplate(note));
//   //   }
// }

// render();

// createBtn.onclick = function () {
//   if (inputElement.value.length === 0) {
//     return; // функція не продовжується, а завершується повертається undefined
//   }
//   // перевірка чи не пуста строчка
//   // innerHTML перепивує весь HTML
//   //   listElement.innerHTML = `
//   //   <li class="list-group-item d-flex justify-content-between align-items-center">
//   //   <span>${inputElement.value}</span>
//   //   <span>
//   // 	 <span class="btn btn-small btn-success">&check;</span>
//   // 	 <span class="btn btn-small btn-danger">&times;</span>
//   //   </span>
//   // </li>`;
//   // listElement.insertAdjacentHTML додоає наступний HTML
//   // не затираючи попередній значенння beforeend
//   listElement.insertAdjacentHTML(
//     'beforeend',
//     getNoteTemplate(inputElement.value)
//   );
//   inputElement.value = ''; // при введенні значення, поле введення очищається ''
// };

// console.log(inputElement.value); // стандартно пусто, в HTML треба ввести value="Vitalii"
// console.log(createBtn);
// console.log(listElement);

// function getNoteTemplate(title) {
//   return `
//     <li class="list-group-item d-flex justify-content-between align-items-center">
// 		<span>${title}</span>
// 		<span>
// 		<span class="btn btn-small btn-success">&check;</span>
// 		<span class="btn btn-small btn-danger">&times;</span>
// 		</span>
//  	 </li>
//   	`;
// }

/* Object Theory

const person = {
  firstName: 'Vitalii',
  lastName: 'Pilipovich',
  year: 1987,
  hasGirlfriend: true,
  languages: ['ua', 'ru', 'de', 'en'],
  getFullName: function () {
    console.log(person.firstName + ' ' + person.lastName);
  },
};

console.log(person.year);
console.log(person['languages']);
const key = 'hasGirlfriend';
console.log(person[key]);
person.hasGirlfriend = false;
console.log(person[key]);
person.getFullName();
*/
