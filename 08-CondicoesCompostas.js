
var data = new Date();
var horaAtual = data.getHours();
var txtHora = document.getElementById("txtHora");
var hora = Number(txtHora.value);
var resultado = document.querySelector("div", resultado);

resultado.innerHTML = `Agora são ${horaAtual} HORAS`

function consultarHora() {
    if (hora === 7) {
        resultado.innerHTML = `Levantar e tomar banho!`
    } else if (hora === 10) {
        resultado.innerHTML = `Estar na igreja!`
    } else {
        resultado.innerHTML = `Hora de estar estudando! ${hora.typeOf}`
    }
}