var resposta = document.querySelector("div#resultado");

function contar() {
  var inicioTxt = document.querySelector("input#inicioTxt");
  var inicio = Number(inicioTxt.value);

  var fimTxt = document.querySelector("input#fimTxt");
  var fim = Number(fimTxt.value);

  var passoTxt = document.querySelector("input#passoTxt");
  var passo = Number(passoTxt.value);

  // --------  Meu jeito antes da correção do professor  --------
  //   var i = 1;

  //   if (fim > inicio) {
  //     var resultado = inicio;
  //     for (inicio; resultado + passo <= fim; i++) {
  //       var resultado = inicio + passo * i;

  //       var newDiv = document.createElement("span");
  //       newDiv.id = "contagem" + i;
  //       newDiv.className = "alert alert-secondary small m-2";
  //       newDiv.innerHTML = `${resultado}`;
  //       resposta.appendChild(newDiv);
  //     }
  //   } else {
  //     var resultado = inicio;
  //     for (inicio; resultado - passo >= fim; i++) {
  //       var resultado = inicio - passo * i;

  //       var newDiv = document.createElement("span");
  //       newDiv.id = "contagem" + i;
  //       newDiv.className = "alert alert-secondary small m-2";
  //       newDiv.innerHTML = `${resultado}`;
  //       resposta.appendChild(newDiv);
  //     }
  //   }

  // -------- Jeito do Professor após correção --------
  if (inicio.lenght == 0 || fim.lenght == 0 || passo.leght == 0) {
    window.alert("[Erro] Faltam dados!");
  } else {
    resposta.innerHTML = "Contando: ";

    if (inicio < fim) {
      for (inicio; inicio <= fim; inicio += passo) {
        resposta.innerHTML += `${inicio} \u{1F449}`;
      }
    } else {
      for (inicio; inicio >= fim; inicio -= passo) {
        resposta.innerHTML += `${inicio} \u{1F449}`;
      }
    }
  }
}

function limpar() {
  resposta.innerHTML = "";
}
