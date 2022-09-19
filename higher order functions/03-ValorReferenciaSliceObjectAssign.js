// ARRAY <-----------------------------------------------------------
let familiaresArray = [
    "Ricardo",
    "Rosangela",
    "Amanda"
]

let familiaresArrayCopia = familiaresArray.slice();
// Outro jeito de desvincular Array
// let familiaresCopia = [...familiares];

familiaresArrayCopia.push("Petrucia");

console.log("familiaresArray", familiaresArray);

console.log("familiaresArrayCopia", familiaresArrayCopia);

// Sem o slice familiares teria Petrucia tambem,
// mas nao tem pois o slice corta o array,
// e como não esta sendo passado parametro no slice,
// faz ele permanecer desvinculado do familiaresCopia.


// OBJETO <-----------------------------------------------------------
let familiaresObject = {
    nome: "Ricardo",
    idade: 44
}

let familiaresObjectCopia = Object.assign({}, familiaresObject);
// Outro jeito de desvincular Objeto
// let familiaresObjectCopia = [...familiaresObject];

familiaresObjectCopia.idade = 45;

console.log("familiaresObject", familiaresObject);

console.log("familiaresObjectCopia", familiaresObjectCopia);