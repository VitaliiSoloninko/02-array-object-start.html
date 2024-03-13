// Шукати теорію, ввести в google mdn pop array

// =============== МЕТОДИ, вида
// Назва масиву і те що після точки names. це метод наприклад .shift()

const names = ['Vitalii', 'Dilya', 'Dmitriy', 'Jasmina']

// const firstName = names.shift(); // видаляє 1 елемент
// const name = names.pop(); // видаляє останній елемент
// names.push('Lola'); // покласти новий елемент в КІНЕЦЬ масиву
// names.unshift('Alsu'); // покласти новий елемент в ПОЧАТОК масиву
// але ОБЕРЕЖНО він не швидкий бо додає елемент і всі наступні зміщає
// console.log('Names: ', names, name);

// console.log(names.reverse()); // Зробити в зворотньому порядку, міняє оригінальний масив
// const reversed = names.toReversed(); // Зробити в зворотньому порядку, масив НЕ міняє

// console.log(names.sort()); // сортує по алфавіту і міняє масив
// console.log(names.toSorted()); // сортує по алфавіту і НЕ міняє масив

// console.log(names.splice(2, 1)); // видаляє 2 номер, 1 кількість
// console.log(names.toSpliced(2, 1)); // НЕ видаляє в оригіналі
// console.log(names);

// ================ Як находити і міняти елементи в масиві

const greateWoman = 'Dilya'
const index = names.indexOf(greateWoman)
// console.log(index); // якщо індекса немає повертає -1
const newNames = names.with(index, 'Dilya super star') // новий метод який міняє копію
// names[index] = 'Dilya super star';
// console.log(names[index]);
// console.log(names);
// console.log(newNames);

// ================ ЗАВЧИТИ, використовується скрізь, map завжди повертає новий масив
// const capitalNames = names.map(function (name) {
//   const newName = name + '!';
//   return newName;
//   // return undefined; // стандартно повертає undefined, якщо нічого не прописати
// });
// console.log(capitalNames);

// const capitalNames = names.map(function (name) {
//   return name.toUpperCase(); // Зробити кожен елемент в верхньому регістрі
//   // name.toLowerCase
// });
// console.log(capitalNames);

// const capitalNames = names.map(function (name, index) {
//   if (index === 1) {
//     return 'Dilya super star';
//   }
//   return name;
// });
// console.log(capitalNames);

// Чи є такий елемент в масиві
// console.log(names.includes('Dilya'));
// console.log(names.indexOf('Dilya') !== -1);
// console.log(names.indexOf('Dilya')); // номер елементу

// ================ РОБОТА З ОБЕКТАМИ
const people = [
	{ name: 'Vitalii', budget: 4200 },
	{ name: 'Dilya', budget: 15100 },
	{ name: 'Dmitriy', budget: 300 },
	{ name: 'Jasmina', budget: 7520 }
]

// Популярні методи map find findIndex filter

// знайти людину, в кого бюджет 7520, indexOf не працює
// console.log(people.indexOf({ budget: 7520 }));

// let findedPerson;
// for (let person of people) {
//   if (person.budget === 7520) {
//     findedPerson = person;
//   }
// }

// const finded = people.find(function (person) { // метод find
// 	return person.budget === 7520
// })

const finded = people.findIndex(function (person) {
	return person.budget === 7520
})

// const finded = people.find((p) => p.budget === 7520) // стрілочна функція, дуже зручно

// console.log(people.with(finded, 42)) // замінити елемент на інше значення

// ============================== Фільтрування
// наприклад більше чим сума
// метод .filter повертає новий масив і часто на практиці зустрічається

// 1 варіант Задача порахувати загальний бюджет, в кого грошей більше ніж 5000
// let sumBudget = 0
// const filtered = people.filter(function (p) {
// 	return p.budget > 5000
// })
// console.log(filtered)

// filtered.forEach(function (p) {
// 	sumBudget += p.budget // те саме, що sumBudget = sumBudget + p.budget
// 	// метод forEach перебирає масив
// })

// 2 варіант функціональне програмування
// Метод filter - фільтрує, map - трансформує масив у щось інше
// reduce - перше значення функція, 2 значення початкове значення а функція приймає акумулятор acc та обєкт ітерації p, => те що повертаємо

// const sumBudget = people
// 	.filter((p) => p.budget > 5000)
// 	.map((p) => p.budget)
// 	.reduce((acc, p) => acc + p, 0)
// console.log(sumBudget)

// 3 варіант
// const byBudget = (p) => p.budget > 5000
// const pickBudget = (p) => p.budget
// const plusBudget = (acc, p) => acc + p
// const sumBudget = people.filter(byBudget).map(pickBudget).reduce(plusBudget, 0)
// console.log(sumBudget)

// ================= Задача по строчках, перевернути фразу задом наперед
// Розбиремо ще пару нових методів, масиви і строчки рядки схожі
// метод .split() строку перетворює на масив
// те що в дужках методу це параментр, наприклад .split('') розібє на букви масив

const string = 'Привіт, як у тебе справи'
const reversed = string
	.split('')
	.toReversed()
	.join('!')
	.split('')
	.filter((c) => c !== '!')
	.join('')
console.log(reversed)
