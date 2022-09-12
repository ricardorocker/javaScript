numberEx1 = 15;
numberEx2 = 33;
numberEx3 = 27;
numberEx4 = 25;


// 1ª Jeito de fazer Function
function dobroEx1(x){
    return x * 2;
}
console.log(`MÉTODO 1 - O dobro de ${numberEx1} é` , dobroEx1(numberEx1));


// 2ª Jeito de fazer Function
let dobroEx2 = function(x){
    return x * 2;
}
console.log(`MÉTODO 2 - O dobro de ${numberEx2} é` , dobroEx2(numberEx2));


// 1ª Jeito de fazer Arrow Function
let dobroEx3 = (x) => {
    return x * 2;
}
console.log(`MÉTODO 3 - O dobro de ${numberEx3} é` , dobroEx3(numberEx3));


// 2ª Jeito de fazer Arrow Function (melhor jeito quando só tem retorno e 1 parametro).
let dobroEx4 = x => x * 2;
console.log(`MÉTODO 4 - O dobro de ${numberEx4} é` , dobroEx3(numberEx4));


// OBS: Arrow Function não reconhece "THIS", conforme exemplo a baixo.
let dobroEx5 = function(){
    return 2 * this.z;
}

let dobroEx6 = () => 2 * this.z;

let numeroEx1 = {
    z: 8,
    d: dobroEx5
}

let numeroEx2 = {
    z: 8,
    d: dobroEx6
}

console.log(`Function com "this" - O dobro de ${numeroEx1.z} é` , numeroEx1.d());
console.log(`Arrow Function com "this" - O dobro de ${numeroEx2.z} é` , numeroEx2.d());
