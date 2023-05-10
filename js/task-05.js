const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

if (nameInput.value !== "") {
  nameOutput.textContent = nameInput.value;
}

nameInput.addEventListener("input", function AnonymousNameChange() {
  if (this.value === "" || this.value === " ") {
    return (nameOutput.textContent = "Anonymous");
  }
  nameOutput.textContent = this.value;
});

// nameInput.setAttribute('autocomplete', 'on');
