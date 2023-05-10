let counterValue = 0;

const valueVisual = document.querySelector("#value");
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

decrementBtn.addEventListener("click", function () {
  counterValue -= 1;
  valueVisual.textContent = counterValue;
});

incrementBtn.addEventListener("click", function () {
  counterValue += 1;
  valueVisual.textContent = counterValue;
});
