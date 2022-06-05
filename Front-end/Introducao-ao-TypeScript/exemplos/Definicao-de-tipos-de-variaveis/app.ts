// em vez de tiparmos os itens dentro de uma função, podemos tipar eles antes para que assim o tamanho do nosso código possa ser diminuido
type input = number | string;

function somarValores(input1: input, input2: input){

    //método convencional
    if(typeof input1 ==='string' || typeof input2 ==='string' ){
        return input1.toString() + input2.toString();
    } else {
        return input1 + input2;
    }

    //If ternario
    // typeof input1 ==='string' || typeof input2 ==='string' ? input1.toString() + input2.toString() : input1 + input2;
}

console.log(somarValores(1, 5));
console.log(somarValores('Aoba ', 'bom dia!'));
console.log(somarValores('1', 5));