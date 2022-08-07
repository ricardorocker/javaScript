// O que é função?
// É um conjunto de instruções que executa uma tarefa ou calcula um valor.

// 1 - Functions declaration
function isValidDeclaration() {
    const soma = 2 + 2;
    return "Functions declaration " + soma;
}
console.log(isValidDeclaration());


// 2 - Functions expression
const isValidExpression = function() {
    const soma = 4 + 2;
    return "Functions expression " + soma;
}
console.log(isValidExpression());

// 3 - Arrow Functions
const isValidArrowFunction = () => {
    const soma = 4 + 4;
    return "Functions ArrowFunction " + soma;
}
console.log(isValidArrowFunction());