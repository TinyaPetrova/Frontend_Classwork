// метод для дебага, чтобы выводить работу и логику в консоль, по типу sout в джаве
console.log('Hello, JS!');

// объявление переменной: способ 1, можно изменить значение
let x = 2
x = 4

console.log('x ==> ', 'x');

// объявление переменной: способ 2, нельзя изменить значение, т. к. константа
// const y = 10
// y = 12
// console.log('y ==>', 'y');

// console.log('Распечатается ли этот текст?');

// DOM: document object model

// способ найти эл-т по id и добавить его в переменную
const btnElement = document.getElementById('btn1')
console.log('btnElement', btnElement);

// способ найти эл-ты по тэгу и добавить их в переменную
let pElementsByTag
pElementsByTag = document.getElementsByTagName('p')
console.log('pElementsByTag[1]', pElementsByTag[1]);

// способ найти эл-ты по классу и добавить их в переменную
const pElementsByClass = document.getElementsByClassName('paragraph')
console.log('pElementsByClass', pElementsByClass);

// инфа об объекте document
console.log('document', document);

// создание нового эл-та
const newHeading = document.createElement("h1")
// <h1></h1>
console.log('Первый консоль лог', newHeading);
newHeading.innerText = 'Наш первый элемент, созданный в JS'
console.log('Второй консоль лог', newHeading);
newHeading.id = 'newHeading'
newHeading.className = 'newHeading'
newHeading.style.color = 'red'
newHeading.style.fontSize = '30px'
console.log(newHeading);
// добавление на страницу в body
document.body.appendChild(newHeading)

// делаем кнопку интерактивной
btnElement.addEventListener("click", () => {
    const newHeading = document.createElement("h1")
    console.log('Первый консоль лог', newHeading);
    newHeading.innerText = 'Наш первый элемент, созданный в JS'
    console.log('Второй консоль лог', newHeading);
    newHeading.id = 'newHeading'
    newHeading.className = 'newHeading'
    newHeading.style.color = 'red'
    newHeading.style.fontSize = '30px'
    console.log(newHeading);
    // добавление на страницу в body
    document.body.appendChild(newHeading)
})

// нажимаем на кнопк и меняем текст хэдинга
// объявляем переменную и через метод гет элемент бай айди
const btn2 = document.getElementById('btn2')
// если нужно, можем проверить содержимое переменной в консоли. на эл-ты на стр НЕ ПОВЛИЯЕТ
console.log(btn2);
// обращаемся к переменной с элементом и навешиваем обработчик событий с аргментами: 
// 1. тип события
// 2. функция с кодом, который нужно выполнить по событию
btn2.addEventListener('click', () => {
    // находим все элементы по тэгу и так далее, НО лучше делать через айдишку, а не по классу или тэгу
    const tagsH1 = document.getElementsByTagName('h1')
    tagsH1[0].innerText = 'DOM 2'
    tagsH1[0].className = 'mainHeading'
    // как сделать по айди:
    // h1 задать айди, например idh1
    // btn2.addEventListener('click', () => {
    // const h1DOM = document.getElementById('idh1')
    // h1DOM.innerText = 'DOM 2'
    // h1DOM.className = 'mainHeading'
})

// удаляем элемент
const btn3 = document.getElementById('btn3')
btn3.addEventListener('click', () => {
    const h1DOM = document.getElementById('idh1')
    h1DOM.remove()
})

// клонируем эл-т
const btn4 = document.getElementById('btn4')
btn4.addEventListener('click', () => {
    const clonedButton = btnElement.cloneNode(true)
    console.log(clonedButton);
    document.body.appendChild(clonedButton)
    clonedButton.id = 'clonedButton'
    clonedButton.innerText = 'Click me and get green heading'
    clonedButton.addEventListener('click', () => {
        const newHeading = document.createElement('h1')
        newHeading.innerText = "Созданный элемент"
        newHeading.id = 'newHeading'
        newHeading.className = 'newHeading'
        newHeading.style.color = 'green'
        newHeading.style.fontSize = '30px'
        console.log(newHeading);
        document.body.appendChild(newHeading)
    })
})

// делаем невидимую кнопку видимой
const btn6 = document.getElementById('btn6')
const hiddenBtn = document.getElementById('btn5')
btn6.addEventListener('click', () => {
    hiddenBtn.className = 'visible'
})

