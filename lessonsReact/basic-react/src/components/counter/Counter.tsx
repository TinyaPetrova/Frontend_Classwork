// импорт хука useState
import { useState } from "react";

function Counter(): JSX.Element {
  // хуки - это названия для стандартных методов работы в реакте
  // этот хук работает с состоянием - каким-то значением, чаще изменяемым
  // внутри хука есть переменная - хранилище значений и функция, которая значение изменяет
  // может называться как хотим, но принято называть функцию со слова set (setName, setValue, etc)

  // хуки имеют азвания, которые мы не изменяем, они установлены в реакт
  // и нужно не забыват ОБЯЗАТЕЛЬНО их импортировать

  // названия хуков начинаются со слова USE
  const [counter, setCounter] = useState(0);

  // функция-счётчик, она использует функцию изменения состояния, принимает старое состояние и меняет на новое, прибавляя +1
  function handlePlus(): void {
    setCounter(counter + 1);
  }

  function handleMinus(): void {
    setCounter(counter - 1);
  }

  return (
    <div className="App">
      <p>Counter</p>
      {/* в кудрявых скобках мы передаём значение переменной */}
      <span>{counter}</span>
      {/* указываем атрибут онКлик и передаём в него функцию-счётчик */}
      <button onClick={handlePlus}>+1</button>
      <button onClick={handleMinus}>-1</button>
    </div>
  );
}

export default Counter;
