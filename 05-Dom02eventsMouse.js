
var box = document.querySelector("div#boxAnimation");
box.addEventListener("click", clicar);
box.addEventListener("mouseenter", aoEntrar);
box.addEventListener("mouseleave", aoSair);
function clicar() {
    // var box = document.querySelector("div#boxAnimation");
    box.innerHTML = "Clicou";
    box.style.background = "green";
}

function aoEntrar() {
    // var box = document.querySelector("div#boxAnimation");
    box.innerHTML = "Entrou";
    box.style.background = "black";
}

function aoSair() {
    // var box = document.querySelector("div#boxAnimation");
    box.innerHTML = "Saiu";
    box.style.background = "grey";
}