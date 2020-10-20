"use strict";

function getDogImage() {
	fetch("https://dog.ceo/api/breed/chow/images/random")
		.then((response) => response.json())
		.then((data) => {
			const img = document.querySelector("img");
			img.src = data.message;
			img.alt = "Un perro";
			document.querySelector(".js-dog").innerHTML = "Enseñame otro Chow";
		});
}

const btn = document.querySelector(".js-dog");
btn.addEventListener("click", getDogImage);

//EJERCICIO 3

function getUser() {
	const user = document.querySelector("#name");
	console.log(user);
	fetch("https://api.github.com/users/" + user.value)
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
		});
}

const search = document.querySelector("#button");
search.addEventListener("click", getUser);
