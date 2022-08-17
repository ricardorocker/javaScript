let div = document.getElementsByTagName("div")[0];

let pi = Math.PI;

div.innerHTML = 
`
<p> PI = <b>${pi}</b> </p>

<p> Raiz quadrado de 16 = <b>${Math.sqrt(16)}</b> </p>

<p> 2 elevado a 3 = <b>${Math.pow(2, 3)}</b> </p>

<p> Chamando número aleatório: <b>${Math.random()}</b> </p>

<p> Nº aleatório multiplacado por 10 e arredondado: 
<b>${ Math.round(Math.random() * 10)}</b> </p>

<p> 5,99 usando floor = <b>${Math.floor(5.99)}</b> </p>

<p> 5,01 usando ceil = <b>${Math.ceil(5.01)}</b> </p>
`;