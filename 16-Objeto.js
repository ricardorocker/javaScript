
// let resultadoArray = document.querySelector("select#resultadoArray");

// let primeiroOption = document.querySelector("option#primeiroOption");

// function validarArray(array){
//   if(array.length === 0){
//     return true;
//   } else {
//     return false;
//   }
// }

// function finalizar() {
//   if (validarArray(primeiroArray)) {
//     window.alert("Nenhum número inserido.");
//   } else {

//     primeiroArray.sort();

//     let tamanhoArray = primeiroArray.length;

//     let resultadoSoma = 0;
//     let i = 0;

//     for (i in primeiroArray) {
//       let somando = primeiroArray[i];
//       resultadoSoma += somando;
//     }

//     let media = resultadoSoma / tamanhoArray;

//     for (i = 0; i < 5; i++) {
//       let frase = document.createElement("div");
//       frase.id = "frase" + i;
//       ordenado.appendChild(frase);
//     }

//     document.getElementById("frase1").innerHTML = `Ao todo temos ${tamanhoArray} números cadastrados.`
//     document.getElementById("frase2").innerHTML = `O maior valor informado foi ${Math.max(...primeiroArray)}.`
//     document.getElementById("frase3").innerHTML = `O menor valor informado foi ${Math.min(...primeiroArray)}.`
//     document.getElementById("frase4").innerHTML = `Somando todos os valores temos ${resultadoSoma}.`
//     document.getElementById("frase5").innerHTML = `A média dos valores digitados é ${media}.`

//   }
// }

// function limpar() {
//   ordenado.innerHTML = "";
//   resultadoArray.innerHTML = "";
//   primeiroOption.innerHTML = "Insira um número acima: ";
//   resultadoArray.appendChild(primeiroOption);

//   for( i = 0 ; primeiroArray.length > 0 ; i++ ){
//     primeiroArray.pop();
//   }
// }




function validarMotorista(motorista) {
  if (motorista == "" || motorista == null || motorista == undefined) {
    return true;
  } else {
    return false;
  }
}


function adicionarMotorista() {
  let motoristaTxt = document.getElementById("motoristasTxt");
  let motorista = motoristaTxt.value;
  let motoristas = [];

  // ---------->> FUNÇÃO COM PARAMETRO <<----------
  if (validarMotorista(motorista)) {
    window.alert("Insira um motorista.");
  } else {
    motoristas.push(motorista);

    primeiroOption.innerHTML = "";

    let option = document.createElement("option");
    option.innerHTML = `${motorista}`;
    resultadoArray.appendChild(option);

    motorista.innerHTML = "";
  }
}

function cadastrar() {
  let anoTxt = document.getElementById("anoTxt");
  let ano = Number(anoTxt.value);
  let modeloTxt = document.getElementById("modeloTxt");
  let arTxt = document.getElementById("arTxt");
  let portasTxt = document.getElementById("portasTxt");
  let kitTxt = document.getElementById("kitTxt");
  let resultadoCadastro = document.querySelector("div#ordenado");


  let dadosMotorista = {
    ano: ano,
    modelo: modeloTxt.value,
    ar: arTxt.checked,
    portas: portasTxt.checked,
    kit: kitTxt.checked,
  };

  let cadastro = document.createElement("div");
  cadastro.innerHTML = dadosMotorista;
  resultadoCadastro.appendChild()

  //     for (i = 0; i < 5; i++) {
//       let frase = document.createElement("div");
//       frase.id = "frase" + i;
//       ordenado.appendChild(frase);
//     }

//     document.getElementById("frase1").innerHTML = `Ao todo temos ${tamanhoArray} números cadastrados.`
//     document.getElementById("frase2").innerHTML = `O maior valor informado foi ${Math.max(...primeiroArray)}.`
//     document.getElementById("frase3").innerHTML = `O menor valor informado foi ${Math.min(...primeiroArray)}.`
//     document.getElementById("frase4").innerHTML = `Somando todos os valores temos ${resultadoSoma}.`
//     document.getElementById("frase5").innerHTML = `A média dos valores digitados é ${media}.`



}


