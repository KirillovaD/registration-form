const userName = document.getElementById('name');
const userLastName = document.getElementById('lastname');
const userEmail = document.getElementById('email');
const password = document.getElementById('password');
const chooseCountry = document.getElementById('country');
const buttonSignUp = document.querySelector('.btn_sign-up');
const buttonSignIn = document.querySelector('.btn_sign-in');

const errorName = document.getElementById('errorName');
const errorLastName = document.getElementById('errorLastName');
const errorEmail = document.getElementById('erroremail');
const errorPassword = document.getElementById('errorpassword');
const errorCountry = document.getElementById('errorCountry');

buttonSignUp.addEventListener('click',check);
buttonSignUp.addEventListener('click',welcome);



function check(){
  // errorName.textContent = '';
  if(userName.value == ''){
    errorName.textContent = 'You forgot to fill name';
  }
  // errorLastName.textContent = '';
  if(userLastName.value == ''){
    errorLastName.textContent = 'You forgot to fill last name';
  }
  // errorEmail.textContent = '';
  if(userEmail.value == ''){
    errorEmail.textContent = 'You forgot to fill email';
  }
  else if(userEmail.value.match = '@'){
    errorEmail.textContent = 'You email is not correct'
  }
  // errorPassword.textContent = '';
  if(password.value == ''){
    errorPassword.textContent = 'You forgot to fill password';
  }
  else if(password.value.length <= 5){
    errorPassword.textContent = 'You password is weak';
  }
  if (chooseCountry.value == 'Country'){
    errorCountry.textContent = 'You forgot to choose country'
  }
 
}

function welcome(){
  if (errorName.textContent && errorLastName.textContent && errorEmail.textContent && errorCountry.textContent && errorPassword.textContent ==''){
    alert(`Welcome, ${userName.value}`);
} 
}

function colorChangeName(){
  userName.style.backgroundColor = "#dfdbf2";
}
function colorBackName(){
  userName.style.backgroundColor = "white";

}

function colorChangeLastName(){
  userLastName.style.backgroundColor = "#dfdbf2";

}
function colorBackLastName(){
  userLastName.style.backgroundColor = "white";

}
function colorChangeEmail(){
  userEmail.style.backgroundColor = "#dfdbf2";

}
function colorBackEmail(){
  userEmail.style.backgroundColor = "white";

}

function colorChangeCountry(){
  chooseCountry.style.backgroundColor = "#dfdbf2";

}
function colorBackCountry(){
  chooseCountry.style.backgroundColor = "white";
}

function colorChangePassword(){
  password.style.backgroundColor = "#dfdbf2";

}
function colorBackPassword(){
  password.style.backgroundColor = "white";

}

function colorChangeBtnUp(){
  buttonSignUp.classList.add ("btn-active");

}
function colorBackBtnUp(){
  buttonSignUp.classList.remove ("btn-active")

}
function colorChangeBtnIn(){
  buttonSignIn.classList.add ("btn-active");

}
function colorBackBtnIn(){
  buttonSignIn.classList.remove ("btn-active")

}








