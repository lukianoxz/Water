"use strict";

// FUNCAO QUE VAI PRA PAGINA CORRETA
const is_desk = !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
let current_hash = window.location.hash;

if (is_desk) {
    window.location.href = "./../desktop/index.html" + current_hash;
}

const numero_jogos = 5;
let lista_jogos = [];
let lista_jogos_botao = [];

const array_hash = [
    "corre-do-lula-2",
    "corre-do-lula",
    "papel-apk",
    "jogo-da-cobrinha",
    "fuja-do-esfomeado",
];

// inicializacao
function pegar_elementos() {
    for (let i = 0; i < numero_jogos; i++) {
        lista_jogos.push(document.getElementById("jogo_" + (i + 1)));
        lista_jogos_botao.push(document.getElementById("jogo_" + (i + 1) + "_botao"));
    }
}

// render
function mostrar_jogo(indice_alvo) {
    for (let i = 0; i < numero_jogos; i++) {
        if (i === indice_alvo) {
            lista_jogos[i].style.display = "block";
        } else {
            lista_jogos[i].style.display = "none";
        }
    }
}

function atualizar() {
    let achou = false;

    for (let i = 0; i < numero_jogos; i++) {
        if (window.location.hash.replace(/^#/, "") == array_hash[i]) {
            mostrar_jogo(i);
            achou = true;
            break;
        } else {
            mostrar_jogo(-1);
        }
    }
}

// logica
function conectar() {
    for (let i = 0; i < numero_jogos; i++) {
        lista_jogos_botao[i].addEventListener("click", function() {
            mostrar_jogo(i);
            window.location.hash = array_hash[i];
        })
    }
}

// inicio
pegar_elementos();
conectar();
atualizar();

window.addEventListener("hashchange", function() {
    atualizar();
})