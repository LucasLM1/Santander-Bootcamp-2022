"use strict";
//Criando um grupo de constantes
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Desenvolvedor"] = 0] = "Desenvolvedor";
    Profissao[Profissao["Estagiario"] = 1] = "Estagiario";
    Profissao[Profissao["Designer"] = 2] = "Designer";
    Profissao[Profissao["Administrador"] = 3] = "Administrador";
})(Profissao || (Profissao = {}));
// Defindo profissão de Paulo através do enum + tipagem do ts
const Paulo = {
    nome: 'Paulo',
    idade: 16,
    profissao: Profissao.Estagiario
};
// Defindo profissão de Davi através do enum + tipagem do ts e interface com lista
const Davi = {
    nome: 'Davi',
    idade: 16,
    profissao: Profissao.Estagiario,
    materias: ['Matemática discreta', 'Lógica de programação', 'Programação', 'Banco de dados']
};
//Primeiro modo de definir uma pessoa e alterar sua idade
const pessoa = {
    nome: 'Lucas',
    idade: 20,
    profissao: 'desenvolvedor'
};
pessoa.idade = 21;
//Segundo modo de definir uma pessoa
const Gustavo = {
    nome: 'Gustavo',
    idade: 18,
    profissao: 'Administrador'
};
function listar(lista) {
    for (const item of lista) {
        console.log('- ', item);
    }
}
listar(Davi.materias);
