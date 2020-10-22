"use strict";

//EJERCICIO 9

const runners = [
	{ name: "Gregory Goyle", time: 66, student: true },     ////
	{ name: "Nymphadora Tonks", time: 9, student: false },
	{ name: "Luna Lovegood", time: 26, student: true },    ////
	{ name: "Cedric Diggory", time: 28, student: false },
	{ name: "Cho Chang", time: 35, student: true },        ////
];

//filter por estudiante

function isStudent(runner) {
	console.log("Esto es runner: ", runner);
	if (runner.student === true) {
		console.log("entro en el IF");
		return true;
	}
}
const studentRunners = runners.filter(isStudent);
console.log("esto es el array runners: ", runners);
console.log("esto es el array studentRunners: ", studentRunners);

// reduce de studentRunners

function winner(faster, runner) {
	debugger;
	//comparar la propiedad TIME para sacar el menor valor
	if (runner.time > faster) {
    console.log("entro en el IF de winner");

    console.log("soy faster: ", faster);
    console.log("soy runner: ", runner);
		return faster;
	} else {
    console.log("entro en el ELSE de winner");
		return runner;
	}
}

const studentWinner = studentRunners.reduce(winner);
console.log("esto es el array studentWinner: ", studentWinner);

//error: el tiempo de ChoChang es mayor que el tiempo de Luna
// es decir: 35 > 26
// por lo que debería entrar por el IF
// PERO entra por el ELSE
// ¿¿ pq ??