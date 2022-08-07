
var nome = window.prompt("Escreva seu nome.");
var nomeSemEspaco = nome.replace(/\s+/g, ''); //REPLACE COM REGEX
var salario = Number(window.prompt("Digite suas receitas"));
var despesas = Number(window.prompt("Digite suas despesas."));
var sobra = salario - despesas;

document.write(`Olá ${nome}, seu nome possui ${nomeSemEspaco.length} letras <br><br>s`); //LENGTH

document.write(`Seu salário é de ${salario}<br>`);
document.write(`Suas despesas são ${despesas}<br>`);
document.write(`Sua sobra é de ${sobra.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`); //FORMATAÇÃO MONETARIA - TOLOCALESTRING
