let motoristas = [];

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

  // ---------->> FUNÇÃO COM PARAMETRO <<----------
  if (validarMotorista(motorista)) {
    window.alert("Insira um motorista.");
  } else {
    motoristas.push(motorista);

    let option = document.createElement("option");
    option.innerHTML = motorista;
    resultadoArray.appendChild(option);

    motorista.innerHTML = "";
  }
}

// function quebrarLinhaVirgula(data) {
//   //convert string to array and remove whitespace
//   let dataToArray = data.split(',').map(item => item.trim());
//   //convert array to string replacing comma with new line
//   return dataToArray.join(`<br>`);
// }

function cadastrar() {
  let anoTxt = document.getElementById("anoTxt");
  let ano = Number(anoTxt.value);
  let modeloTxt = document.getElementById("modeloTxt");
  let simAr = document.getElementById("simAr");
  let simPortas = document.getElementById("simPortas");
  let simKit = document.getElementById("simKit");
  let resultadoCadastro = document.querySelector("div#ordenado");


  // QB911940851BR

  let dadosMotorista = {
    ano: ano,
    modelo: modeloTxt.value,
    motorista: motoristas,
    ar: simAr.checked,
    portas: simPortas.checked,
    kit: simKit.checked,
  };
  
  let objetoSjon = JSON.stringify(dadosMotorista);
  // let objetoFormatado = String(objetoSjon);
  // let desiredData = quebrarLinhaVirgula(objetoFormatado);

  let cadastro = document.createElement("div");
  cadastro.className = "m-4";
  cadastro.innerHTML = `dadosMotorista = ${objetoSjon}`;
  resultadoCadastro.appendChild(cadastro);

}


