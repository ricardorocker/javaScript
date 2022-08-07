
function consultarPais() {
    var paisOrigem = document.querySelector("input", pais);
    var resultado = document.getElementById("resultado");

    var txtpais = String(paisOrigem.value);

    if (txtpais === "Brasil") {
        resultado.innerHTML = `Como voce nasceu no ${txtpais} voce é Brasileiro!`
    } else {
        resultado.innerHTML = `Como voce nasceu no ${txtpais} voce é estrangeiro!`
    }
}