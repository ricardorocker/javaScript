
let resultadoArray = document.querySelector("select#resultadoArray");
let primeiroArray = [];

function adicionarNumero(){

  let numeroTxt = document.getElementById("numeroTxt");
  let numero = Number(numeroTxt.value);

  let primeiroOption = document.querySelector("option#primeiroOption");

  primeiroArray.push(numero);

  primeiroOption.innerHTML = `[ ${primeiroArray} ] a array possui ${primeiroArray.length} elementos.`;

  let option = document.createElement("option");
  option.innerHTML = `Conteúdo valor ${numero} adicionado a posição ${primeiroArray.indexOf(numero)}`;
  resultadoArray.appendChild(option);

  numeroTxt.value = "";

}

// primeiroArray.sort;

// 'for(let pos in primeiroArray) {
//   `A posição ${pos} tem o valor ${primeiroArray[pos]}`;
// }'

function limpar(){
 resultadoArray.innerHTML = "";
}