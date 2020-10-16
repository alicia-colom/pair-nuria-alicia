"use strict"

function getDogImage() {
    fetch("https://dog.ceo/api/breed/chow/images/random")
      .then(response => response.json())
      .then(data => {
        const img = document.querySelector("img");
        img.src = data.message;
        img.alt = "Un perro";
        document.querySelector(".js-dog").innerHTML = "Enseñame otro Chow";
      });
      
  }
  
  const btn = document.querySelector(".js-dog");
  btn.addEventListener("click", getDogImage);

