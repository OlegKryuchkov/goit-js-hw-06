const fontSizeControlInput = document.querySelector("#font-size-control");
const textFontSize = document.querySelector("#text");

textFontSize.style.fontSize = fontSizeControlInput.value + "px";

fontSizeControlInput.addEventListener("input", fontSizeChange);

function fontSizeChange() {
  textFontSize.style.fontSize = fontSizeControlInput.value + "px";
}
