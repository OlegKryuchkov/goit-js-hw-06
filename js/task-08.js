const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  //   Скасовуємо перезавантаження сторінки за замовчуванням
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (!email || !password) {
    alert(
      "Попередження: Поля мають бути заповнені. Email or password must be filled"
    );
    return;
  }

  const formDataObject = { email, password };

  console.log(formDataObject);
  form.reset();
}
