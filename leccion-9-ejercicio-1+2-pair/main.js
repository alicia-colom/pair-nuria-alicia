"use strict";

//EJERCICIO 1

const numberList = [];
let number = 0;

function get100Numbers() {
	for (let i = 0; i < 100; i++) {
		number = number + 1;
		console.log("esto es number: " + number);
		numberList.push(number);
	}
}

get100Numbers();
console.log("esto es el array: " + numberList);

// EJERCICIO 2 - Sotiremun

let numberListReverse = [];

function getReversed100Numbers() {
	numberListReverse = numberList.reverse();
}

getReversed100Numbers();
console.log("esto es el array al revés: " + numberListReverse);
console.log(typeof(numberList));
console.log(typeof(numberListReverse));
