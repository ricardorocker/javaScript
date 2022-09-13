function novoAluno(nome, idade) {
    return { nome, idade };
}

let alunos = [
    novoAluno("Ricardo", 27),
    novoAluno("Petrucia", 25),
    novoAluno("Samuel", 22),
    novoAluno("João", 35)
]

console.log("Array Alunos Inicio", alunos);

function stringNomeIdade(aluno){
    return aluno.nome + " tem " + aluno.idade + " anos.";
}

function alunoDaqui5anos(aluno){
    return {name: aluno.nome, age: aluno.idade + 5};
}

function modificandoArrayAlunos(aluno){
    aluno.idade += 5;
    return aluno;
}

console.log("map stringNomeIdade", alunos.map(stringNomeIdade));

console.log("map alunoDaqui5anos", alunos.map(alunoDaqui5anos));

console.log("map modificandoArrayAlunos", alunos.map(modificandoArrayAlunos));

console.log("Array Alunos Final", alunos);