"use strict";

const Game1button = document.getElementById("Game1button");
const Game2button = document.getElementById("Game2button");
const Game3button = document.getElementById("Game3button");
const Game4button = document.getElementById("Game4button");

const Game1 = document.getElementById("Game1");
const Game2 = document.getElementById("Game2");
const Game3 = document.getElementById("Game3");
const Game4 = document.getElementById("Game4");

Game1.style.display = "none";
Game2.style.display = "none";
Game3.style.display = "none";
Game4.style.display = "none";

Game1button.addEventListener("click", function(){
    Game1.style.display = "block";
    Game2.style.display = "none";
    Game3.style.display = "none";
    Game4.style.display = "none";
})

Game2button.addEventListener("click", function(){
    Game1.style.display = "none";
    Game2.style.display = "block";
    Game3.style.display = "none";
    Game4.style.display = "none";
})

Game3button.addEventListener("click", function(){
    Game1.style.display = "none";
    Game2.style.display = "none";
    Game3.style.display = "block";
    Game4.style.display = "none";
})

Game4button.addEventListener("click", function(){
    Game1.style.display = "none";
    Game2.style.display = "none";
    Game3.style.display = "none";
    Game4.style.display = "block";
})