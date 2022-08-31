
function falarGenerico(){
    console.log("Olá, trabalho como ", this.profissao);
}

let ricardo = {
    profissao: "Dev Front End",
    // falar: function(){
    //     console.log("Olá, trabalho como ", this.profissao);
    // }
    falar: falarGenerico
}

let petrucia = {
    profissao: "Biologa",
    // falar: function(){
    //     console.log("Olá, trabalho como ", this.profissao);
    // }
    falar: falarGenerico
}

// ricardo.falar();
// petrucia.falar();

let funcaoBinded = falarGenerico.bind(ricardo);
funcaoBinded();