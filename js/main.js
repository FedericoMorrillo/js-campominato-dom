"use strict";
//funzioni
function cellsGenerator(tag, classname, content) {
  const cella = document.createElement(tag);
  cella.classList.add(classname);
  cella.append(content);
  return cella;
}

function bombsGenerator(num1, num2, bombsArray){
  while(bombsArray.length<16){
  const posizioneBombe= Math.floor(Math.random()* num2 + num1);
    if(!bombsArray.includes(posizioneBombe)){
      bombsArray.push(posizioneBombe);
    }
  }
}

function addScore(content, scoreArray){
  if(!scoreArray.includes(content)){
    scoreArray.push(content);
  }
}
//funzioni

//dichiarazioni
const board = document.querySelector(".board");
const buttonPlay = document.querySelector(".btn");
let lvDifficolta = document.getElementById("difficolta");
const messaggio = document.querySelector('.messaggio');
let bombe = [];
const finale=  document.querySelector(".messaggio-finale")
let score = [];

//scateniamo un evento on click sul bottone
buttonPlay.addEventListener("click", function () {

//nasconde il messaggio centrale
messaggio.classList.add('hidden');

//elimina le celle se precedentemente ho cliccato sul bottone
board.innerHTML = "";
bombe = [];
score = [];
finale.classList.remove("show");
finale.classList.add("hidden");

//variabile di stato
let gameInProgress = true;

  //condizione
  if (lvDifficolta.value === "facile") {
    //ciclo per creare celle
    for (let i = 1; i <= 100; i++) {
      const celle = cellsGenerator("div", "cells", i);
      celle.classList.add("cells-hard");
      board.append(celle);
      
      //aggiunge un evento on click sulle celle
      celle.addEventListener("click", function () {
        if(gameInProgress){
          if(bombe.includes(i)){
            this.classList.add("bomb");
            gameInProgress = false;
            finale.innerHTML = `Hai Perso!  il tuo punteggio è: ${score.length}`;
            finale.classList.remove("hidden");
            finale.classList.add("show","perso");
          }
          else {
            addScore(i,score);
            this.classList.add("select-cell");
            console.log(i);
          }  
          if(score.length === 100-16){
            gameInProgress = false;
            finale.innerHTML = `Hai Vinto!  il tuo punteggio è: ${score.length}`;
            finale.classList.remove("hidden");
            finale.classList.add("show","vinto");
          }
        }          
      });
    }
    
    // invochiamo la funzione che genera le 16 bombe dandole come parametri un numero minimo, massimo, e l'array dove pusharle
    bombsGenerator(1,100,bombe);
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
        if(gameInProgress){
          if(bombe.includes(i)){
            this.classList.add("bomb");
            gameInProgress = false;
            finale.innerHTML = `Hai Perso!  il tuo punteggio è: ${score.length}`;
            finale.classList.remove("hidden");
            finale.classList.add("show","perso");
          }
          else {
            addScore(i,score);
            this.classList.add("select-cell");
            console.log(i);
          }  
          if(score.length === 81-16){
            gameInProgress = false;
            finale.innerHTML = `Hai Vinto!  il tuo punteggio è: ${score.length}`;
            finale.classList.remove("hidden");
            finale.classList.add("show","vinto");
          }
        }          
      });
    }
    bombsGenerator(1,81,bombe);
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
        if(gameInProgress){
          if(bombe.includes(i)){
            this.classList.add("bomb");
            gameInProgress = false;
            finale.innerHTML = `Hai Perso!  il tuo punteggio è: ${score.length}`;
            finale.classList.remove("hidden");
            finale.classList.add("show","perso");
          }
          else {
            addScore(i,score);
            this.classList.add("select-cell");
            console.log(i);
          }  
          if(score.length === 49-16){
            gameInProgress = false;
            finale.innerHTML = `Hai Vinto!  il tuo punteggio è: ${score.length}`;
            finale.classList.remove("hidden");
            finale.classList.add("show","vinto");
          }
        }          
      });
    }
    bombsGenerator(1,49,bombe);
  }
});
