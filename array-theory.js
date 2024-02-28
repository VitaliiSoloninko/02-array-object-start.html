// Шукати теорію, ввести в google mdn pop array

const names = ['Vitalii', 'Dilya', 'Dmitriy', 'Jasmina'];

// =============== МЕТОДИ

// Назва масиву і те що після точки names.

// const firstName = names.shift(); // видаляє 1 елемент
// const name = names.pop(); // видаляє останній елемент

// names.push('Lola'); // покласти новий елемент в КІНЕЦЬ масиву

// names.unshift('Alsu'); // покласти новий елемент в ПОЧАТОК масиву
// ОБНРЕЖНО він не швидкий бо додає елемент і всі наступні зміщає
// console.log('Names: ', names, name);

// console.log(names.reverse()); // Зробити в зворотньому порядку, міняє оригінальний масив
// const reversed = names.toReversed(); // Зробити в зворотньому порядку, масив НЕ міняє

// console.log(names.sort()); // сортує по алфавіту і міняє масив
// console.log(names.toSorted()); // сортує по алфавіту і НЕ міняє масив

// console.log(names.splice(2, 1)); // видаляє 2 номер, 1 кількість
// console.log(names.toSpliced(2, 1)); // НЕ видаляє в оригіналі
// console.log(names);

// ================ Як находити і міняти елементи
const greateWoman = 'Dilya';
const index = names.indexOf(greateWoman);
console.log(index); // якщо індекса немає повертає -1
const newNames = names.with(index, 'Dilya super star'); // новий метод який міняє копію
// names[index] = 'Dilya super star';
// console.log(names[index]);
console.log(names);
console.log(newNames);
