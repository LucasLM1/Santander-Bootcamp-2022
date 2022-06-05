"use strict";
let button = document.getElementById('button');
//Dizendo ao TS que trata-se de um inpute não de algum outro elemento ou tag qualquer
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
function adicionarNumero(numero1, numero2, devePrintar, frase) {
    let resultado = numero1 + numero2;
    if (devePrintar) {
        console.log(frase + resultado);
    }
    return resultado;
}
let devePrintar = true;
let frase = 'O valor é: ';
if (button) {
    button.addEventListener('click', () => {
        if (input1 && input2)
            console.log(adicionarNumero(Number(input1.value), Number(input2.value), devePrintar, frase));
    });
}
