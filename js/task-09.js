function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const handlerButton = document.querySelector(".change-color");
handlerButton.addEventListener("click", changeBGColor);

function changeBGColor() {
  const randomColor = getRandomHexColor();
  document.querySelector("body").style.backgroundColor = randomColor;
  document.querySelector(".color").textContent = randomColor;
}
