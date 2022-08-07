
function somar() {
    var txtN1 = document.querySelector("input#txtN1");
    var txtN2 = document.getElementById("txtN2");
    var n1 = Number(txtN1.value);
    var n2 = Number(txtN2.value);

    var soma = n1 + n2;

    var resultado = document.querySelector("div#resultado");

    resultado.innerHTML = `A soma de ${n1} + ${n2} é igual a <strong>${soma}</strong>.`;
}