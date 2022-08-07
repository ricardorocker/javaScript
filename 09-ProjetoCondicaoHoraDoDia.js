
var data = new Date();
var horaAtual = data.getHours();

//  var horaAtual = 11;

var horaAtualTxt = document.querySelector("div", horaAtualTxt);
var imgHora = document.getElementById("imgHora");

horaAtualTxt.innerHTML = `Agora são ${horaAtual} horas`

if (horaAtual >= 18) {
    imgHora.src = "Noite.jpg";
} else if (horaAtual <= 11) {
    imgHora.src = "Dia.jpg";
} else {
    imgHora.src = "Tarde.jpg";
}