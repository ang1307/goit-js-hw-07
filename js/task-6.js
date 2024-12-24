function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBox(sum) {
  const boxConteiner = document.getElementById("boxes");
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < sum; i++) {
    const box = document.createElement("div");
    const size = 30 + i * 10;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(box);
  }
  boxConteiner.appendChild(fragment);
}

function destroyBoxes() {
  const boxConteiner = document.getElementById("boxes");
  boxConteiner.innerHTML = "";
}

const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const input = document.querySelector('input[type="number"]');

createBtn.addEventListener("click", () => {
  const sum = Number(input.value);

  if (sum >= 1 && sum <= 100) {
    createBox(sum);
    input.value = "";
  } else {
    alert("Please enter a number between 1 and 100.");
  }
});

destroyBtn.addEventListener("click", destroyBoxes);