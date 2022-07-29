
function verificarIdade() {
    var resultado = document.getElementById("resultado");
    var sexoMasculino = document.querySelector("input#masculino");
    var sexoFeminino = document.querySelector("input#feminino");
    
    var anoNascimentoTxt = document.querySelector('input#anoNascimentoTxt');
    var anoNascimento = Number(anoNascimentoTxt.value);
    
    var ano = new Date();
    var anoAtual = ano.getFullYear();

    var idade = anoAtual - anoNascimento;
    resultado.innerHTML = `${sexoMasculino.checked ? "voce é um homem e " : sexoFeminino.checked ? "voce é uma mulher e " : "Voce não marcou o sexo e "}tem ${idade} anos!`
    // Tinha feito esse ternario quando tinha usado checkbox em vez de radio, vou deixar o ternário só para aprendizado!
}


