"use strict"
// USE STRICT - Não permite criar variavel sem declaração de tipo

function print(){
    var x = 7;
    // x = 7;
    console.log("Chamando 'x' dentro da função(escopo local): ", x);
}

print();
console.log("Chamando 'x' fora da função(escopo global): ", x);
// Não funciona, já que x tem tpo declarado "var"