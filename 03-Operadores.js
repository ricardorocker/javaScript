
var idade = Number(window.prompt("Digite sua idade."));
var nota1 = Number(window.prompt("Digite a nota da primeira prova."));
var nota2 = Number(window.prompt("Digite a nota da segunda prova."));
var media = (nota1 + nota2) / 2;

document.write(`Voce é ${idade > 17 ? "maior de idade!" : "menor de idade!"} <br> <br>`);

document.write(`Sua média é ${media}, voce esta ${media >= 7 ? "aprovado!" : "reprovado"} <br> <br>`);
document.write(`${media == 10 ? "Parabens, voce foi aprovado com louvor!" : ""}`);