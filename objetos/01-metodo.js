// -> 01 - Método 1: Detalhado com método(função) dentro de objeto. <-

// var aluno1 = {
//     nome: "Ricardo",
//     notas: [7, 9],

//     media: function(n1, n2){return (n1 * 2 + n2) / 3}
// }

// var aluno2 = {
//     nome: "Petrucia",
//     notas: [8, 9.5],

//     media: function(n1, n2){return (n1 * 2 + n2) / 3}
// }

// console.log(aluno1);
// console.log(aluno1.media(aluno1.notas[0], aluno1.notas[1]));

// console.log(aluno2);
// console.log(aluno2.media(aluno2.notas[0], aluno2.notas[1]));


// -> 02 - Método 2: Simplificado com método do objeto chamando função de fora, referenciando as notas com "this". <-
function calcMedia(){
    return (this.notas[0] * 2 + this.notas[1]) / 3;
}

var aluno1 = {
    nome: "Ricardo",
    notas: [7, 9],
    media: calcMedia
}

var aluno2 = {
    nome: "Petrucia",
    notas: [8, 9.5],    
    media: calcMedia
}

console.log(aluno1);
console.log(aluno1.media());

console.log(aluno2);
console.log(aluno2.media());