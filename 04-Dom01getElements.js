
var pUm = window.document.getElementsByTagName("p")[0];
window.document.write("Usando innerText na primeira tag <strong>'P'</strong>, está escrito: <br>'"
    + pUm.innerText + "'<br><br>");
pUm.style.color = "grey";

var pDois = window.document.getElementsByTagName("p")[1];
window.document.write("Usando innerHtml na segunda tag <strong>'P'</strong> para trazer tag strong junto: <br>'"
    + pDois.innerHTML + "'");

// var div = window.document.getElementById("btn");
// div.style.color = "yellow";

var div = window.document.querySelector("div#btn");
div.style.color = "yellow";