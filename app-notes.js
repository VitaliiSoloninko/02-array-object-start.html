// ====== Program Notes full
const inputElement = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')

// ====== Масив з початковими даними
const notes = [
	{
		title: 'Записать блог про масиви',
		completed: false
	},
	{
		title: 'Расказать теорию обектов',
		completed: true
	}
]

// ====== Функція рендер - загрузка масиву
function render() {
	listElement.innerHTML = '' // перед загрузкою очистити
	if (notes.length === 0) {
		// якщо немає елементів, то вивести надпис
		listElement.innerHTML = '<p>Нет елементов</p>'
	}
	for (let i = 0; i < notes.length; i++) {
		listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i], i))
		// вкінці і - це передаємо у функцію індекс елемента
	}
}
// ====== Виклик функції render
render()

// ======  Обробник подій кліку по кнопках виконано і знищити
listElement.onclick = function (event) {
	if (event.target.dataset.index) {
		const index = parseInt(event.target.dataset.index)
		const type = event.target.dataset.type
		if (type === 'toggle') {
			notes[index].completed = !notes[index].completed // поміняти значення на протилежне !
		} else if (type === 'remove') {
			notes.splice(index, 1) // перше - це значення що удаляємо, друге значення - це скільки удаляємо
		}
	}
	render()
}

// ======  Функція створення HTML замітки
function getNoteTemplate(note, index) {
	// вкінці index - це передаємо у функцію індекс елемента
	return `
	    <li class="list-group-item d-flex justify-content-between align-items-center">
			<span class="${note.completed ? 'text-decoration-line-through' : ''}">${
		note.title // тернарное виражение якщо заметка ? true то зачеркнуть : інакше пусто
	}</span>
			<span>
			<span class="btn btn-small btn-${
				note.completed ? 'warning' : 'success' // якщо заметка ? true то жовта інакше : зелена
			}"data-index="${index}"  data-type="toggle">&check; </span> 
			<span class="btn btn-small btn-danger" data-index="${index}" data-type="remove">&times;</span>
			</span>
	 	 </li>
	  	`
	// також треба додати індекс, щоб знати номер кнопки і data-type - тип кнопки
}

// ======  Функція створення замітки при кліку
createBtn.onclick = function () {
	if (inputElement.value.length === 0) {
		return // функція не продовжується, а завершується повертається undefined
	}
	const newNote = {
		title: inputElement.value,
		completed: false
	}
	notes.push(newNote) // додати елемент до списку
	render()
	inputElement.value = '' // при введенні значення, поле введення очищається ''
}
