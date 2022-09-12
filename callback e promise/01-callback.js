let usuarios = ["Ricardo", "Petrucia"];

let inserirUsuarios = (nome, callback) => {
    setTimeout(() => {
       usuarios.push(nome);
       callback(); 
    }, 1000);
}

let listarUsuarios = function(){
    console.log(usuarios);
}

inserirUsuarios("Samuel", listarUsuarios);