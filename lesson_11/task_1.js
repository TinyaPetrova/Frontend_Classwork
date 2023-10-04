const getElementByIndex = (array, index) => {
    if (index >= 0 && index < array.length) {
      return array[index];
    } else {
      return "Индекс за пределами диапазона";
    }
  };
  
  const myArray = ["apple", "banana", "cherry", "pineapple"];
  const indexToGet = 2;
  
  const result = getElementByIndex(myArray, indexToGet);
  console.log(result);
  