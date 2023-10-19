// чтобы запустить файл - команда ts-node + название файла
// ctrl + L - чтобы очистить консоль на винде
// если возникают ошибки при объявлении одинаковых переменных в соседних файлах
// пишем в начале файла: export {} и TS перестаёт ругаться
// через tsc имя файла можно запустить

console.log("Welcome to TS");

// типы данных: string, number, boolean, undefined, null, bigInt, symbol

// тип объявляется в момент объявления переменной
let x: string;
x = "Peter";
// x = 10 - Type 'number' is not assignable to type 'string'

x = String(10); // приведение типов, тогда ошибки не будет
// TS запрещает нам присваивать значения другого типа

// способ присвоения типа вместе с объявлением переменной

let year: number = 1993;

console.log(x);
console.log(year);

// * ключевые слова для объявления типов: 'type' и 'interface'

type Age = number; // рукотворные типы пишутся с заглавной буквы, иногда пишут TAge от слова type

let myAge: Age = 30;

// редко определяют сразу несколько типов, но бывает и так:
let yourAge: number | string = 18;

// let yourAge: number | string = true - ошибка! рез может быть только намбером или стрингой, буллеаном не может быть, т. к. он не был заявлен через логический оператор
// union type - можно присваивать выбор из нескольких типов через логическое "или"

type Animal = "cat" | "dog";
let myPet: Animal = "cat";
// let myPet: Animal = 'parrot' - нельзя, будет ругаться
// мы можем давать выбор не только из типов, но и из отдельных зачений

// расширяем тип Animal
type ExpendedPet = Animal | "parrot";
let yourPet: ExpendedPet = "parrot"; // теперь можно и попугая

// можно не указывать тип при объявлении и типом станет тот, что будет у значения при инициализации
let wildAnimal = "lion"; // тут он на автомате присвоит стринг, раз мы сами ничего не объявили. но так лучше не делать

// типизация массивов

// массив строк
let fruits: string[] = ["apple", "pear", "strawberry"];

// массив булевых значений
let answers: boolean[] = [true, false];

// * как типизировать объект

// * через type
// TS проверит наличие всех ключей и соответствие данных по ключам и их типам

type User = {
  firstName: string;
  isAdmin: boolean;
  // указываем необязательые поля через вопросительный знак, чтобы tS не ругался, если этого ключа не будет
  age?: number;
};

const user1: User = { firstName: "Jack", isAdmin: true };

// наследование типов (стало возможным в последних версиях TS)
type VipUser = User & {
  isVip: true;
};

const vip: VipUser = { firstName: "Jack", isAdmin: false, isVip: true };

// * через interface

interface IMagician {
  // запятые можно не указывать, ошибки не будет
  name: string;
  hasWand: boolean;
  faculty: string;
}

interface IBlackMagician extends IMagician {
  hasBlackMagic: true;
}

const voldemort: IBlackMagician = {
  name: "Voldemort",
  hasWand: true,
  faculty: "Slytherin",
  hasBlackMagic: true,
};

// ? Создайте интерфейс город City
// ? с типизированными ключами
// name
// population
// foundationDate
// isRiver
// riverName - опционально
// ? Создайте несколько объектов
// ? Добавьте расширение touristicCity с параметрами
// isTouristic
// touristicName

interface ICity {
  name: string;
  population: number;
  foundationDate: number;
  isRiver: boolean;
  riverName?: string;
}

interface ITouristicCity extends ICity {
  isTouristic: true;
  touristicName: string;
}

const barcelona: ITouristicCity = {
  name: "Barcelona",
  population: 5000000,
  foundationDate: 133,
  isRiver: false,
  isTouristic: true,
  touristicName: "Barsa",
};

// ! Типизация функций
// типизируем параметры и возвращаемое значение

function sum1(a: number, b: number): number {
  // последнее :number это то, что возвращает функция
  return a + b;
}

console.log(sum1(12, 48)); // только два параметра, третий будет ошибкой!

function sum2(a: number, b: number, c: string): string {
  return `${c} ${a + b}`;
}

console.log(sum2(33, 99, "сумма")); // параметры только в таком порядке, в каком мы объявляли переменные
// вывод будет "сумма 132"

//типизация стрелочных функций
const dev = (a: number, b: number): number => a / b;
