let div = document.getElementsByTagName("div")[0];

let a = {
    nome: "Ricardo Rocker",
    nota: 8.5
}

let b = JSON.stringify(a);

let c = '{"nome":"Petrucia Rocker","nota":9.5}';

let d = JSON.parse(c);

div.innerHTML = 
`
<p> Objeto(Array a com nome e nota) <b>${a}</b> </p>

<p> JSON.stringify no Objeto <b>${b}</b> </p>

<p> String criada manualmente <b>${c}</b> </p>

<p> JSON.parse na string <b>${d}</b> </p>
`;