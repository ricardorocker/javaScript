// Método Manual
var metodoManual = document.getElementById("metodoManual");
metodoManual.innerHTML = 
"Essa é a 1ª vez digitando manualmente<br> " + 
"Essa é a 2ª vez digitando manualmente<br> " +
"Essa é a 3ª vez digitando manualmente<br> " + 
"Essa é a 4ª vez digitando manualmente<br> " + 
"Essa é a 5ª vez digitando manualmente<br> ";

// Método com While
var metodoWhile = document.getElementById("metodoWhile");
var toAdd = document.createDocumentFragment();
var i = 1;
while(i < 6){
    var newDiv = document.createElement("div");
    newDiv.id = "metodoWhile" + i;
    newDiv.className = "text-aline";
    newDiv.innerHTML = `Essa é a ${i}ª vez usando o While`
    metodoWhile.appendChild(newDiv);
    i++;
}

// Método com Do-While
var metodoDoWhile = document.getElementById("metodoDoWhile");
var toAdd = document.createDocumentFragment();
var i = 1;
    do {
    var newDiv = document.createElement("div");
    newDiv.id = "metodoDoWhile" + i;
    newDiv.className = "text-aline";
    newDiv.innerHTML = `Essa é a ${i}ª vez usando o Do-While`
    metodoDoWhile.appendChild(newDiv);
    i++;
} while(i < 6);

// Método com For
var metodoFor = document.getElementById("metodoFor");
for (i = 1 ; i < 6 ; i++){
    var newDiv = document.createElement("div");
    newDiv.id = "metodoFor" + i;
    newDiv.className = "text-aline";
    newDiv.innerHTML = `Essa é a ${i}ª vez usando o For`;
    metodoFor.appendChild(newDiv);
}



