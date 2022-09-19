// OBJETO - - - - - - - - - -
let aluno1 = {
    nome: "Ricardo",
    sobrenome: "Rocker",
    idade: 27,
    telefone: "(83)99122-2886",
    email: "ricardo.rocker@gmail.com",
    cidade: "João Pessoa"
}

let { email } = aluno1;

console.log("aluno1", aluno1);
console.log("{ email }", email);

let { nome, sobrenome, ...resto } = aluno1;

console.log("- - - - - - - - - -");
console.log("{ nome }", nome);
console.log("{ sobrenome }", sobrenome);
console.log("{ resto }", resto);

let aluno2 = {
    nome: "Petrucia",
    sobrenome: "Lira",
    idade: 25,
    telefone: "(83)99122-2854",
    email: "petrucia.lira@gmail.com",
    cidade: "João Pessoa"
}

let aluno3 = {
    nome: "Amanda",
    sobrenome: "Santos",
    idade: 22,
    telefone: "(83)99122-2854",
    email: "amanda.santos@gmail.com",
    cidade: "São Paulo"
}

// ARRAY - - - - - - - - - -

let alunos = [aluno1, aluno2, aluno3];

let [ricardo, ...outros] = alunos;

console.log("- - - - - - - - - -");

console.log("ricardo", ricardo);

console.log("outros", outros);