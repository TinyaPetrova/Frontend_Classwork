"use strict" // строгий режим в js

console.log('Hello world');

// объявление переменных

// константу нельзя переназначить
const x = 'word'
// через let можно
let y = 'another word'
y = 77

// var z = 5

console.log('y', y);

// 1. строки, они же strings
let str1 = 'строка'
let str2 = "тоже строка"
let str3 = `и это тоже`
let str4 = `${str1} и это тожеее` // вторая часть добавится к первой переменной
console.log(str4);

// 2. числа, они же numbers
let num1 = 2
let num2 = 2.2
console.log(num2);

// 3. булевое значение boolean
let boolean1 = true
let boolean2 = false
boolean1 = 'что-то другое'
console.log(typeof boolean1);

// 4. undefined 
let smth
console.log(smth);

// 5. bigInt
console.log(Number.MAX_SAFE_INTEGER); // самое большое число в js
let bigInt = 9n // постфикс n говорит о большом числе

// 6. symbol
let symbol = Symbol('smth')
console.log(symbol);

// 7. null
let smth1 = null
console.log(typeof smth1); // 6 + пробел

// неявное преобразование
let num3 = 6 + ' '
console.log(typeof num3); // string

// явное преобразование строки в число
let num4 = Number('10')
console.log(typeof num4);

// явное превращение числа в строку
let str5 = String(15)
console.log(typeof str5);

let num5 = Number('10')
let stringy = '11'
console.log(num5);
// превращение переменной в число через +
console.log(+stringy);

let bool1 = Boolean(0)
console.log(bool1); // true

let bool2 = Boolean(1)
console.log(bool2); // true

// равенство '=', '==' (нестрогое равенство), '===' (строгое)
// нестрогое равенство с приведением типов
console.log(9 == '9'); // будет true
// строгое равенство
console.log(9 === '9'); // будет false

let n1 = 1 + 1 // сложение
let n2 = 2 - 1 // вычитание
let n3 = 13 * 2 // умножение
let n4 = 15 / 2 // деление
console.log(n4); // 7.5 - тут не джава))
let n5 = 31 % 2 // остаток при делении
let n6 = 3 ** 3 // возведение в степень
console.log(Math.sqrt(25)); // 5, корень из числа

console.log(9 !== +'9'); // будет false

let thing = undefined
!thing // true

// массивы в js
let cities = ['London', 'Madrid', 'Paris', 15, bool1, true]
let cities1 = ['London', 'Madrid', 'Paris', 15, bool1, true]
// фолс, разные объекты и ссылки
console.log(cities === cities1);
console.log(typeof cities[3]); // 15 - number

let cities2 = {0: 'London', 1: 'Madrid', 2: 'Paris', 3: 15, 4: bool1, 5: true}

let items = []
let items1 = new Array()

console.log(items1); // []

cities1[3] = "New York"
console.log(cities1);

let cities3 = [...cities1, 'Tashkent']
console.log(cities3); // будет новый массив с новым элементом

let cities5 = ['London', 'Madrid', ['Texas', 'Berlin'], 'Paris', 15, bool1, true] // двухмерный массив, через деструктуризацию

console.log(cities1.length); // длина массива

// цикл для выведения всех эл-тов массива
for (let i = 0; i < cities.length; i++) {
    console.log(cities[i]);
}