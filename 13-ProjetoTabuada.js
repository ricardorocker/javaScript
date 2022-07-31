var resposta = document.getElementById("optionSelected");
var resultadoTabuada = document.getElementById("resultadoTabuada");

function consultarTabuada() {
  var numeroTxt = document.querySelector("input#numeroTxt");
  var numero = Number(numeroTxt.value);

  resultadoTabuada.innerHTML = ""

  for ( i = 1 ; i <= 10 ; i++ ) {
    var resultado = numero * i;
    var option = document.createElement("option");
    option.text = `${numero} x ${i} = ${resultado}`;
    option.value = i;
    resultadoTabuada.appendChild(option);
  }

  option.size = 10;
}
