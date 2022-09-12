let usuarios = ["Ricardo", "Petrucia"];

let inserirUsuarios = (nome) => {

    let exemploPromise = Promise(function (resolve, reject) {
        setTimeout(() => {
            usuarios.push(nome);

            let erro = false;

            if (!erro) {
                resolve();
            } else {
                reject({ msg: "Deu erro hein..." });
            }
        }, 1000);
        return exemploPromise;
    })
}

let listarUsuarios = function () {
    console.log(usuarios);
}

inserirUsuarios("Samuel").then(listarUsuarios).catch((erro) => {
    console.log(erro.msg);
});