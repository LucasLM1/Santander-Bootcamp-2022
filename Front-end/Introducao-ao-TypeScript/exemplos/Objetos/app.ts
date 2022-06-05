interface Pessoa {
    nome: string,
    idade: number,

    //Quando colocado "?" após profissão, significa que ela não é mais obrigatória
    profissao?: Profissao 
}

interface Estudante extends Pessoa {
    materias: string []
}

//Criando um grupo de constantes
enum Profissao {
    Desenvolvedor,
    Estagiario,
    Designer,
    Administrador
}

// Defindo profissão de Paulo através do enum + tipagem do ts
const Paulo: Pessoa = {
    nome: 'Paulo',
    idade: 16,
    profissao: Profissao.Estagiario
}

// Defindo profissão de Davi através do enum + tipagem do ts e interface com lista
const Davi: Estudante = {
    nome: 'Davi',
    idade: 16,
    profissao: Profissao.Estagiario,
    materias : ['Matemática discreta', 'Lógica de programação', 'Programação', 'Banco de dados']
}

//Primeiro modo de definir uma pessoa e alterar sua idade
const pessoa = {
    nome: 'Lucas',
    idade: 20,
    profissao: 'desenvolvedor'
}
pessoa.idade = 21;

//Segundo modo de definir uma pessoa
const Gustavo: {nome:string, idade:number, profissao:string} = {
    nome: 'Gustavo',
    idade: 18,
    profissao: 'Administrador'
}

function listar(lista:string[]) {
    for (const item of lista){
        console.log('- ', item);
    }
}
listar(Davi.materias);