let p1 = document.getElementById("p1");
let p = document.getElementsByTagName("p")[1];
let paragrafo = document.getElementsByClassName("paragrafo")[1];

p1.innerText = "<h4>teste1 com innerText</h4>";
p.textContent = "<h4>teste2 com textContent</h4>";
paragrafo.innerHTML = "<h4>teste3 com innerHTML</h4>"

p.style = "color: blue";
p1.style.backgroundColor = "grey";
