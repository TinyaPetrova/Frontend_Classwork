const formItem = document.getElementById("formItem");
const items = document.getElementById("items");

formItem.addEventListener("submit", (event) => {
  event.preventDefault();
  const amount = event.target.amount.value;
  event.target.amount.value = " ";
  while (items.firstChild) {
    items.removeChild(items.firstChild);
  }
  fetch(`https://fakestoreapi.com/products?limit=${amount}`)
    .then((data) => data.json())
    .then((data) => {
      data.forEach((current) => {
        const p = document.createElement("p");
        p.textContent = current.title;
        items.appendChild(p);
      });
    });
});
