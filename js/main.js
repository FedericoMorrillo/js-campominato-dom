"use strict";
//funzioni
function cellsGenerator(tag, classname, content) {
  const cella = document.createElement(tag);
  cella.classList.add(classname);
  cella.append(content);
  return cella;
}

function bombsGenerator(num1, num2, bombsarray){
  while(bombsarray.length<16){
  const posizioneBombe= Math.floor(Math.random()* num2 + num1);
    if(!bombsarray.includes(posizioneBombe)){
      bombsarray.push(posizioneBombe);
    }
  }
}
//funzioni

//dichiarazioni
const board = document.querySelector(".board");
const buttonPlay = document.querySelector(".btn");
let lvDifficolta = document.getElementById("difficolta");
const messaggio = document.querySelector('.messaggio');
let bombe = [];

//scateniamo un evento on click sul bottone
buttonPlay.addEventListener("click", function () {

//nasconde il messaggio centrale
messaggio.classList.add('hidden');

//elimina le celle se precedentemente ho cliccato sul bottone
board.innerHTML = "";
bombe = [];

  //condizione
  if (lvDifficolta.value === "facile") {
    //ciclo per creare celle
    for (let i = 1; i <= 100; i++) {
      const celle = cellsGenerator("div", "cells", i);
      celle.classList.add("cells-hard");
      board.append(celle);
      
       //aggiunge un evento on click sulle celle
       celle.addEventListener("click", function () {
        this.classList.add("select-cell");
        console.log(i);
      });
    }
    
    // invochiamo la funzione che genera le 16 bombe dandole come parametri un numero minimo, massimo, e l'array dove pusharle
    bombsGenerator(1,100,bombe)
  }

  //condizione
  else if (lvDifficolta.value === "media") {
    //ciclo per creare celle
    for (let i = 1; i <= 81; i++) {
      const celle = cellsGenerator("div", "cells", i);
      celle.classList.add("cells-medium");
      board.append(celle);

      //aggiunge un evento on click sulle celle
      celle.addEventListener("click", function () {
        this.classList.add("select-cell");
        console.log(i);
      });
    }
    bombsGenerator(1,81,bombe)
  }

  //condizione
  else if (lvDifficolta.value === "difficile") {
    //ciclo per creare celle
    for (let i = 1; i <= 49; i++) {
      const celle = cellsGenerator("div", "cells", i);
      celle.classList.add("cells-easy");
      board.append(celle);

      //aggiunge un evento on click sulle celle
      celle.addEventListener("click", function () {
        this.classList.add("select-cell");
        console.log(i);
      });
    }
    bombsGenerator(1,49,bombe)
  }
});
