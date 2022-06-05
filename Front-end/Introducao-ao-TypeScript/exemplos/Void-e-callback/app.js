"use strict";
function somarValoresNumericos(numero1, numero2) {
    console.log(numero1 + numero2);
}
//Callback === função que será passada como parametro
function somarValoresNumericosETratar(numero1, numero2, callback) {
    let resultado = numero1 + numero2;
    return callback(resultado);
}
function aoQuadrado(numero) {
    return numero * numero;
}
function divisao(numero) {
    return numero / numero;
}
console.log(somarValoresNumericosETratar(1, 3, aoQuadrado));
console.log(somarValoresNumericosETratar(1, 3, divisao));
