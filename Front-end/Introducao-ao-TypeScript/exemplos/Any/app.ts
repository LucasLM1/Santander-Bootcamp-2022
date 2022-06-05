//Usar any tira poder de tipagem do typescript criando incoerencias no projeto
//O any é comumente usado quando um objeto desconhecido é manipulado, ou quando uma refatoração de JS para TS é aplicada rapidamente sem tipar os objetos utilizados
//É uma má prática que reduz a velocidade dos times no longo prazo e foge do propósito original do typescript

let valorAny: any;

valorAny = 3,
valorAny = 'Hello World',
valorAny =  true

let valorString: string = 'teste';
valorString = valorAny;

let valorString2: string = 'teste2';
valorString = valorAny;

function somarString(string1: string, string2: string) {
    console.log(string1 + string2);
}

somarString(valorString, valorString2);
somarString('Oi ', 'Como cê tá?');