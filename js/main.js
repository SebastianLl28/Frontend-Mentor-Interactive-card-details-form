const button = document.querySelector(".form__button");
const form = document.querySelector("form");
const confirm = document.querySelector("section");

const inputName = document.querySelector('.form__input[id="names"]');
const inputNumber = document.querySelector('.form__input[id="number"]');
const inputMonth = document.querySelector('.form__input[id="month"]');
const inputYear = document.querySelector('.form__input[id="year"]');
const inputCvc = document.querySelector('.form__input[id="cvc"]');

const Form = {
  names: "",
  number: "",
  month: "",
  year: "",
  cvc: "",
};

button.addEventListener("click", function (e) {
  e.preventDefault();
  if (evaluarForm()) {
    form.classList.add("form--display");
    confirm.classList.remove("section--display");
  }
});

inputName.addEventListener("input", validar);
inputNumber.addEventListener("input", validar);
inputMonth.addEventListener("input", validar);
inputYear.addEventListener("input", validar);
inputCvc.addEventListener("input", validar);

function validar(e) {
  if (e.target.id == "names") {
    validarNombre(e.target);
    let text = e.target.value.trim() != "" ? e.target.value : "Jane Appleseed";
    document.querySelector(".cardFront__info").children[1].textContent = text;
  } else if (e.target.id == "number") {
    validarNumber(e.target);
    let text =
      e.target.value.trim() != "" ? e.target.value : "0000 0000 0000 0000";
    document.querySelector(".cardFront__info").children[0].textContent = text;
  } else {
    validarInfo(e.target);
    return;
  }
}

function validarNombre(e) {
  if (/\d/g.test(e.value) || e.value.trim() == "") {
    e.classList.add("form__input__error");
    e.parentElement
      .querySelector(".form__error")
      .classList.remove("form__error--visibility");
    Form[e.id] = "";
    return;
  }
  e.classList.remove("form__input__error");
  e.parentElement
    .querySelector(".form__error")
    .classList.add("form__error--visibility");
  Form[e.id] = e.value;
}

function validarNumber(e) {
  const regext = /\d{4,} \d{4,} \d{4,} \d{4,}/g;
  if (!regext.test(e.value)) {
    e.classList.add("form__input__error");
    e.parentElement
      .querySelector(".form__error")
      .classList.remove("form__error--visibility");
    Form[e.id] = "";
    return;
  }
  e.classList.remove("form__input__error");
  e.parentElement
    .querySelector(".form__error")
    .classList.add("form__error--visibility");
  Form[e.id] = e.value;
}

function validarInfo(e) {
  if (e.id == "month" || e.id == "year") {
    e.classList.add("form__input__error");
    e.parentElement
      .querySelector(".form__error")
      .classList.remove("form__error--visibility");
  } else {
  }
  e.classList.remove("form__input__error");
  e.parentElement
    .querySelector(".form__error")
    .classList.add("form__error--visibility");
  if (e.id == "month") {
    document.querySelector(
      ".cardFront__info"
    ).lastElementChild.firstElementChild.textContent = e.value;
    llenarClass(e);
  } else if (e.id == "year") {
    document.querySelector(
      ".cardFront__info"
    ).lastElementChild.lastElementChild.textContent = e.value;
    llenarClass(e);
  } else if (e.id == "cvc") {
    document.querySelector(".cardBack__cvc").textContent = e.value;
    llenarClass(e);
  }
}

function llenarClass(e) {
  Form[e.id] = e.value;
}

function evaluarForm() {
  for (let value in Form) {
    if (Form[value].trim() == "") {
      return false;
    }
  }
  return true;
}
