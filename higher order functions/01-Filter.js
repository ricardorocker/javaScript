function novoAluno(nome, idade) {
    return { nome, idade };
}

let alunos = [
    novoAluno("Ricardo", 27),
    novoAluno("Petrucia", 25),
    novoAluno("Samuel", 22),
    novoAluno("João", 35)
]

console.log(alunos);

// FOR para trazer nomes de alunos com menos de 30.
for (let aluno of alunos) {
    if (aluno.idade < 30) {
        console.log("For: ", aluno.nome);
    }
}

// Usando o FILTER para trazer array somente com alunos a baixo de 30.
function temMenosDe30(aluno) {
    return aluno.idade < 30;
}

let alunosComMenos30 = alunos.filter(temMenosDe30);

console.log("Filter", alunosComMenos30);

// Array filtrado com alunos a baixo de 30 sem usasr o FILTER
function filtro(callback) {

    let alunosFiltrados = [];

    for (let aluno of alunos) {
        if (callback(aluno)) {
            alunosFiltrados.push(aluno);
        }
    }

    return alunosFiltrados;
}

console.log("Sem filter", filtro(temMenosDe30));