function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector("#controls");
const input = controls.querySelector("input");
const createBtn = controls.querySelector("button[data-create]");
const destroyBtn = controls.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

const createBoxes = (amount) => {
  destroyBoxes();

  const elements = [];
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.classList.add("box");
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    elements.push(div);
    size += 10; 
  }

  boxes.append(...elements);
};

const destroyBoxes = () => {
  boxes.innerHTML = "";
};

const handleClick = () => {
  const amount = parseInt(input.value);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  }

  input.value = ""; 
};
createBtn.addEventListener("click", handleClick);

destroyBtn.addEventListener("click", destroyBoxes);