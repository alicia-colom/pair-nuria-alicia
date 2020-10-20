"use strict";

const numbers = [1, 2, 3];
const list = document.querySelector(".list");

for (const eachNumbers of numbers) {
  const numbersList = document.createElement("li");
  list.appendChild(numbersList);
  const numberContent = document.createTextNode(eachNumbers);
  numbersList.appendChild(numberContent);
}
