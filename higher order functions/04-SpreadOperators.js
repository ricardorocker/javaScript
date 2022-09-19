let pessoa = {
    nome: "Ricardo S. Rocker",
    idade: 27
}

let contato = {
    telefone: "(83)99122-2886",
    email: "ricardo.rocker@gmail.com"
}

let pessoaCopia = { ...pessoa };
pessoaCopia.idade = 44;

let ObjetoConsolidado = { ...pessoa, sexo:"Masculino", ...contato};

console.log("pessoa", pessoa);
console.log("pessoaCopia", pessoaCopia);
console.log("contato", contato);
console.log("ObjetoConsolidado", ObjetoConsolidado);