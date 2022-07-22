let form = document.querySelector("form")
//чтобы форма не отправлялась

form.addEventListener('submit', function (event) {
  event.preventDefault();
  checkTextInput('input[name="name"]', '#errorName', 'name');
  checkTextInput('input[name="lastName"]', '#errorLastName', 'last name');
  checkTextInput('input[name="email"]', '#erroremail' , 'email');
  checkTextInput('input[name="password"]', '#errorpassword' , 'password');

  checkSymbolsEmail('input[name="email"]', '#erroremail');
  checkLengthPassword('input[name="password"]', '#errorpassword');

  let checkbox = document.querySelector('input[name="checkbox"]');
  if (!checkbox.checked){ //проверка checkbox, если НЕ поставлена галочка
    document.querySelector('#errorcheckbox').textContent = 'Please, agree with terms and policy'
  };

  let selectCountry = document.querySelector('#country');
  if (selectCountry.value == 'Country'){
    document.querySelector('#errorCountry').textContent = 'You forgot to choose country';

  }

  const buttonSignIn = document.querySelector('.btn_sign-in');
  function welcome() {
    if (errorName.textContent && errorLastName.textContent && errorEmail.textContent && errorCountry.textContent && errorPassword.textContent == '') {
      alert(`Welcome, ${userName.value}`);
    };
  };



  changeColorInput('input[name="name"]');
  changeColorBackInput('input[name="name"]');
  changeColorInput('input[name="lastName"]');
  changeColorBackInput('input[name="lastName"]');
  changeColorInput('input[name="email"]');
  changeColorBackInput('input[name="email"]');
  changeColorInput('input[name="password"]');
  changeColorBackInput('input[name="password"]');
  changeColorInput('input[name="country"]');
  changeColorBackInput('input[name="country"]');


});
//Функция для проверки заполненности полей
function checkTextInput(selector, errorDiv, inputName) {
  let input = document.querySelector(selector);
  let errorText = document.querySelector(errorDiv);

  if (input.value.length == 0) {
    errorText.textContent = `You forgot to fill ${inputName}`
  }
}

//Функция для проверки наличия символа @
function checkSymbolsEmail(selector, errorDiv){
  let input = document.querySelector(selector);
  let errorText = document.querySelector(errorDiv);
  if (!input.value == '@') {
    errorText.textContent = 'You email is not correct'
  };
}
//Функция для проверки длины пароля
function checkLengthPassword(selector, errorDiv){
  let input = document.querySelector(selector);
  let errorText = document.querySelector(errorDiv);
  if (input.value.length < 5) {
    errorText.textContent = 'Your password is weak';
  };
}
//Функция для смены цвета текста при наведении мыши 
function changeColorInput(selector){
  let input = document.querySelector(selector);
  input.style.backgroundColor = "#dfdbf2";

}
//Функция для возврата цвета поля 
function changeColorBackInput(selector){
  let input = document.querySelector(selector);
  input.style.backgroundColor = "white";
}


const buttonSignUp = document.querySelector('.btn_sign-up');


buttonSignUp.addEventListener('click', check);
buttonSignUp.addEventListener('click', welcome);



function check() {

};






function colorChangeBtnUp() {
  buttonSignUp.classList.add("btn-active");

};

function colorBackBtnUp() {
  buttonSignUp.classList.remove("btn-active");

};

function colorChangeBtnIn() {
  buttonSignIn.classList.add("btn-active");

};

function colorBackBtnIn() {
  buttonSignIn.classList.remove("btn-active");

};





// let form = document.querySelector('form');
// const errorName = document.getElementById('errorName');
// const errorLastName = document.getElementById('errorLastName');
// const errorEmail = document.getElementById('erroremai');
// const userName = document.getElementById('name');
// const userLastName = document.getElementById('lastname');
// const userEmail = document.getElementById('email');