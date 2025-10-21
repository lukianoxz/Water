"use strict";

let GamesX = [];
let GamesXbutton = [];

function GetElementos(Numero){
    for (let i = 1; i < Numero + 1; i++){
        GamesX.push(document.getElementById("Game" + i));
        GamesXbutton.push(document.getElementById("Game" + i + "button"));
    }
}

function EsconderElementos(){
    for (let i = 0; i < GamesX.length; i++){
        GamesX[i].style.display = "none";
    }
}

function Mostrar_ocultar(Elemento){
    let Esconder = false;
    if (GamesX[Elemento].style.display === "block"){
        Esconder = true;
    }
    EsconderElementos();
    if (!Esconder){
        GamesX[Elemento].style.display = "block";
    }
}

function AddEventListener(){
    for (let i = 0; i < GamesXbutton.length; i++){
        GamesXbutton[i].addEventListener("click", function(){
            let x = i;
            Mostrar_ocultar(x);
        })
    }
}

GetElementos(4);
EsconderElementos();
AddEventListener();