const formItems = document.getElementById("formItems");
const loader = document.getElementById("loader");
const productList = document.getElementById("productList");
const content = document.getElementById("content");

// обратились к форме по айди
formItems.addEventListener("submit", (event) => {
  // предотвратили поведение по умолчанию
  event.preventDefault();
  console.log("click!");
  // нашли элементы с ошибками на странице
  const error = document.querySelector(".error");
  if (error) {
    content.removeChild;
  }
  // чтобы стареы не отображались с новыми, чистим список от страых элементов
  while (productList.firstChild) {
    productList.removeChild(productList.firstChild);
  }
  // забрали данные из инпут в переменную
  const amount = event.target["formAmount"].value;
  // очистили форму
  event.target["formAmount"].value = " ";
  // подставили в запрос переменную через шаблонные строки
  fetch(`https://fakestoreapi.com/products?limit=${amount}`)
    // обработка респонс на предмет ошибки
    // обратились к полю ОК
    // он мб либо тру, либо фолс - в зависимости от успеха
    .then((response) => {
      if (!response.ok) {
        // сгенерили ошибку и отправили её в catch
        throw new Error("Something went wrong :(");
      }
      // при положительном исходе обрабатываем json
      return response.json();
    })
    .then((data) => {
      // ! таймайт нужен, чтобы прокрутилось колесико загрузки
      // ! положили в таймаут отображение данных чтобы сымитировать поведение сервера, в реальной разработке так делать не надо
      setTimeout(() => {
        // делаем див видимым
        content.style.display = "block";
        // удалает элемент из потока - мы его не видим
        // если хотим оставить элемент, но сделать невидимым - используем visibility : hidden в css
        loader.style.display = "none";
        // распечатываем массив
        data.forEach((el) => {
          // создаём новый элемент списка
          const listItem = document.createElement("li");
          listItem.textContent = el.title;
          productList.append(listItem);
        });
      }, 1000);
    })
    // обработчик ошибки
    .catch((error) => {
      // обрабатываем клиентскую ошибку
      content.style.display = "block";
      loader.style.display = "none";
      errorMessage.className = "error";
      errorMessage.style.color = "orange";
      const errorMessage = document.createElement("p");
      errorMessage.textContent = `Error!`;
      content.append(errorMessage);
    });
});
