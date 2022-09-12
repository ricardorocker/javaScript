// let ricardo = {
//     profissao: "Dev Front End",
//     falar: function(){
//         console.log("Olá, trabalho como ", this.profissao);
//     }
// }

// let petrucia = {
//     profissao: "Biologa",
//     falar: function(){
//         console.log("Olá, trabalho como ", this.profissao);
//     }
// }

// ricardo.falar();
// petrucia.falar();


// -------------------------------------------------------


function falarGenerico(){
    console.log("Olá, trabalho como ", this.profissao);
}

let ricardo = {
    profissao: "Dev Front End",
    falar: falarGenerico
}

let petrucia = {
    profissao: "Biologa",
    falar: falarGenerico
}

let funcaoBinded = falarGenerico.bind(ricardo);
funcaoBinded();