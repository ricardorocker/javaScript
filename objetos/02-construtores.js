/* ---> METÓDO 1 - CRIANDO DENTRO DE ARRAY TURMA UM OBJETO PARA CADA ALUNO
var calcMedia = function(){
    return (this.nota1 + this.nota2) / 2;
}

var turma = [
    {
        nome: "Ricardo",
        nota1: 9,
        nota2: 7,
        media: calcMedia
    },
    {
        nome: "Petrucia",
        nota1: 6,
        nota2: 10,
        media: calcMedia
    }
]

var aluno = turma[1];

console.log(aluno);
console.log(aluno.media()); */




/* ---> METÓDO 2 - CRIANDO CADA ALUNO PELO PARAMETRO DA FUNÇÃO CRIARALUNO
function criarAluno(nome, n1, n2){

    return{
        nome: nome,
        nota1: n1,
        nota2: n2,
        media: function(){
            return (this.nota1 + this.nota2) / 2;
        }
    }
}

var aluno = criarAluno("Ricardo", 8.5, 9.5);

console.log(aluno);
console.log(aluno.media()); */




/* ---> METÓDO 3 - CRIANDO CADA ALUNO DENTRO DO ARRAY TURMA, PELO PARAMETRO DA FUNÇÃO CRIARALUNO E PASSANDO POR CADA ELEMENTO DESSE ARRAY TURMA
function criarAluno(nome, n1, n2){

    var aluno = {
        nome: nome,
        nota1: n1,
        nota2: n2,
        media: function(){
            return (this.nota1 + this.nota2) / 2;
        }
    }

    return aluno;
}

var turma = [
    criarAluno("Ricardo", 8.5, 9.5),
    criarAluno("Petrucia", 7, 9)
]

turma.forEach( function(elemento) {
    console.log(elemento);
})
// esse "forEach" de cima é igual o "for" de baixo, a diferença é que ele é um método do objeto "turma"
for(var aluno of turma){
    console.log(aluno);
} */




//  ---> METÓDO 4 - CRIANDO CADA ALUNO INSTANCIANDO DO OBJETO ALUNO
function aluno(nome, n1, n2) {

    this.nome = nome;
    this.nota1 = n1;
    this.nota2 = n2;

    this.media = function () {
        return (this.nota1 + this.nota2) / 2;
    }
}

var a = new aluno("Ricardo", 8.5, 9.5);
var b = new aluno("Petrucia", 7, 9);

console.log(a);
console.log(a.nome + ` tirou ${a.nota1} na primeira prova, ${a.nota2} na segunda e obteve média de ` + a.media() + ".");