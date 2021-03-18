const inputEmail = document.querySelector('.input-email');
const inputPhone = document.querySelector('.input-phone');
const buttonSignIn = document.querySelector('.button-sign-in');
const modal = document.querySelector('.modal')

const inValidEmail = document.querySelector(".invalid-email");
const inValidPhone = document.querySelector('.invalid-phone-number');

const validationForEmail = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
const validationPhoneNumber = /^\+\d*$/;

const valideEmail = inputEmail.onblur = () => {
    if (!validationForEmail.test(inputEmail.value)) {
        inValidEmail.style.display = 'block';
    }
}

inputEmail.onfocus = () => {
    inValidEmail.style.display = 'none';
    inValidEmail.value = "";
}

const validePhone = inputPhone.onblur = () => {
    if (!validationPhoneNumber.test(inputPhone.value)) {
        inValidPhone.style.display = 'block';
    }
}
inputPhone.onfocus = () => {
    inValidPhone.style.display = 'none';
    inValidPhone.value = "";
}

buttonSignIn.addEventListener("click", () => {
    if (valideEmail && validePhone) {
        modal.style.display = "block";
    }
})

document.addEventListener('mousedown', (event) => {
    if (!modal.contains(event.target)) {
        modal.style.display = 'none';
    }
})