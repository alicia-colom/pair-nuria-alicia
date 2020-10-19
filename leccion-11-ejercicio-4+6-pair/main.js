"use strict";

// EJERCICIO 4 + 6
// 1.- evento keyup en el input --> string en el p + localstorage
// 2.- review localstorage --> recargar datos
// 3.- datos en objeto + stringify

const nameBox = document.querySelector(".js-name");
const surnameBox = document.querySelector(".js-surname");
const paragraph = document.querySelector(".js-paragraph");
const userData = [{ name: "" }, { surname: "" }];

// NO TENEMOS CLARO CÓMO USAR A CONTINUACIÓN EL LOCALSTORAGE:
// userData = localStorage.getItem("fullname");

function handleGetData(event) {
	paragraph.innerHTML = nameBox.value + " " + surnameBox.value;

	if (event.currentTarget.id === "name") {
		userData.name = event.currentTarget.value;
	} else {
		userData.surname = event.currentTarget.value;
	}

	console.log(userData);

	localStorage.setItem("fullName", userData);
}

nameBox.addEventListener("keyup", handleGetData);
surnameBox.addEventListener("keyup", handleGetData);
