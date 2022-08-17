// localStorage.clear();

let div = document.getElementsByTagName("div")[0];

onload = function(){
    // Popular/trazer dados
    let nome = localStorage.getItem("nome");
    div.innerHTML = 
    `
    <p>${nome}</p>
    `;
}

function atualizar(elemento){
    let valor = elemento.value;
    
    div.innerHTML = 
    `
    <p>${valor}</p>
    `;

    // Salvar dados
    localStorage.setItem("nome", valor);
}
