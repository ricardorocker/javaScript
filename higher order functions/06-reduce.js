let aluno1 = {
    nome: "Ricardo",
    idade: 27
}

let aluno2 = {
    nome: "Petrucia",
    idade: 25
}

let aluno3 = {
    nome: "Amanda",
    idade: 22
}

let alunos = [aluno1, aluno2, aluno3];

console.log("alunos", alunos);

// function somaIdadeTurma(total, aluno){
//     return total + aluno.idade;
// }

let somaIdadeTurma = (total, aluno) => total + aluno.idade; 

console.log("Reduce alunos", alunos.reduce(somaIdadeTurma, 0))