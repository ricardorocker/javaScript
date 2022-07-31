
let resultadoArray = document.querySelector("select#resultadoArray");
let ordenado = document.querySelector("div#ordenado");
let primeiroOption = document.querySelector("option#primeiroOption");

let primeiroArray = [];

function validarNumero(n){
  if(n > 0 && n < 101){
    return true;
  } else {
    return false;
  }
}


function adicionarNumero() {
  let numeroTxt = document.getElementById("numeroTxt");
  let numero = Number(numeroTxt.value);

  // ---------->> FUNÇÃO COM PARAMETRO <<----------
  if ( !validarNumero(numero) ) {
    window.alert("Número inválido.");
  } else {
    primeiroArray.push(numero);

    primeiroOption.innerHTML = "";

    let option = document.createElement("option");
    option.innerHTML = `Valor ${numero} adicionado. `;
    resultadoArray.appendChild(option);

    numeroTxt.value = "";
  }
}

function validarArray(array){
  if(array.length === 0){
    return true;
  } else {
    return false;
  }
}

function finalizar() {
  if (validarArray(primeiroArray)) {
    window.alert("Nenhum número inserido.");
  } else {

    primeiroArray.sort();

    let tamanhoArray = primeiroArray.length;

    let resultadoSoma = 0;
    let i = 0;

    for (i in primeiroArray) {
      let somando = primeiroArray[i];
      resultadoSoma += somando;
    }

    let media = resultadoSoma / tamanhoArray;

    for (i = 0; i < 5; i++) {
      let frase = document.createElement("div");
      frase.id = "frase" + i;
      ordenado.appendChild(frase);
    }

    document.getElementById("frase1").innerHTML = `Ao todo temos ${tamanhoArray} números cadastrados.`
    document.getElementById("frase2").innerHTML = `O maior valor informado foi ${Math.max(...primeiroArray)}.`
    document.getElementById("frase3").innerHTML = `O menor valor informado foi ${Math.min(...primeiroArray)}.`
    document.getElementById("frase4").innerHTML = `Somando todos os valores temos ${resultadoSoma}.`
    document.getElementById("frase5").innerHTML = `A média dos valores digitados é ${media}.`

    // let tamanhoArrayTxt = document.createElement("div");
    // tamanhoArrayTxt.innerHTML = `Ao todo temos ${tamanhoArray} números cadastrados.`
    // ordenado.appendChild(tamanhoArrayTxt);

    // let maiorValorTxt = document.createElement("div");
    // maiorValorTxt.innerHTML = `O maior valor informado foi ${primeiroArray[tamanhoArray - 1]}.`
    // ordenado.appendChild(maiorValorTxt);

    // let menorValorTxt = document.createElement("div");
    // menorValorTxt.innerHTML = `O menor valor informado foi ${primeiroArray[0]}.`
    // ordenado.appendChild(menorValorTxt);

    // let resultadoSomaTxt = document.createElement("div");
    // resultadoSomaTxt.innerHTML = `Somando todos os valores temos ${resultadoSoma}.`
    // ordenado.appendChild(resultadoSomaTxt);

    // let mediaTxt = document.createElement("div");
    // mediaTxt.innerHTML = `A média dos valores digitados é ${media}.`
    // ordenado.appendChild(mediaTxt);
  }
}

function limpar() {
  ordenado.innerHTML = "";
  resultadoArray.innerHTML = "";
  primeiroOption.innerHTML = "Insira um número acima: ";
  resultadoArray.appendChild(primeiroOption);

  for( i = 0 ; primeiroArray.length > 0 ; i++ ){
    primeiroArray.pop();
  }
}