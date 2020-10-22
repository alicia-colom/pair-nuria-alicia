'use strict';

// EJERCICIO 4 + 6
// 1.- evento keyup en el input --> string en el p + localstorage
// 2.- review localstorage --> recargar datos
// 3.- datos en objeto + stringify

const nameBox = document.querySelector('.js-name');
const surnameBox = document.querySelector('.js-surname');
const paragraph = document.querySelector('.js-paragraph');
let userData = { userName: 'nombre', userSurname: 'apellido' };
let name = nameBox.value;
let surname = surnameBox.value;
const btn = document.querySelector('.js-btn');

// NO TENEMOS CLARO CÓMO USAR A CONTINUACIÓN EL LOCALSTORAGE:
// userData = localStorage.getItem("fullname");

function handleGetData(event) {
  paragraph.innerHTML = nameBox.value + ' ' + surnameBox.value;

  if (event.currentTarget.id === 'name') {
    userData.userName = event.currentTarget.value;
  } else {
    userData.userSurname = event.currentTarget.value;
  }
  storeLocal();
}

nameBox.addEventListener('keyup', handleGetData);
surnameBox.addEventListener('keyup', handleGetData);

// ESTO ES PARA GUARDAR LOS DATOS:

function storeLocal() {
  const jsonUserData = JSON.stringify(userData);
  localStorage.setItem('fullname', jsonUserData);
}

// RECUPERAR DATOS:

function getLocal() {
  const storeUserData = localStorage.getItem('fullname');
  const lastData = JSON.parse(storeUserData);
  userData = lastData;
}
function repintName() {
  getLocal();
  nameBox.value = userData.userName;
  surnameBox.value = userData.userSurname;
}
btn.addEventListener('click', repintName);
