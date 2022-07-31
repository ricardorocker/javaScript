
let resultadoArray = document.querySelector("select#resultadoArray");
let ordenado = document.querySelector("div#ordenado");

let primeiroArray = [];

function adicionarNumero() {

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

function ordenar() {
  primeiroArray.sort();
  ordenado.innerHTML = `A array ordenada é [ ${primeiroArray} ]`;  

  for (let pos in primeiroArray) {
    let newDiv = document.createElement("div");
    // newDiv.className = "bg-secondary";
    newDiv.id = "posicao" + pos;
    newDiv.innerHTML = `A posição ${pos} tem o valor ${primeiroArray[pos]}`;
    ordenado.appendChild(newDiv);
  }
}

function limpar() {
  resultadoArray.innerHTML = "";
}