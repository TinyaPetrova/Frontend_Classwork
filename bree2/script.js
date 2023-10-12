const breeInfo = document.getElementById("breeInfo");

const breeImage = document.getElementById("breeImage");

const breeText = document.getElementById("breeText");

async function getBree() {
  const response = await fetch(
    "https://tinyapetrova.github.io/fake_API/user.json"
  );
  const bree = await response.json();
  console.log(bree);
  console.log(breeImage);
  breeImage.src = bree.img;
  const { name, surname, age, isHousewife } = bree;
  breeText.textContent = `I am ${name} ${surname}, my age is ${age} y.o., ${
    isHousewife ? "I am housewife" : "I am teacher"
  }`;
}

getBree();
