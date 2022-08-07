function Name() {
    this.name = "Ricardo Rocker";
}

const ricardo = new Name();

console.log(ricardo);

// Propriedade "name" do objeto Name
console.log(ricardo.name);

// --------- Segunda Forma --------- 

function Name2(name) {
    this.name = name;
}

const ricardo2 = new Name2("Ricardo Rocker");
const petrucia = new Name2("Petrucia Rocker");

console.log(ricardo2);
console.log(ricardo2.name);
console.log(petrucia.name);


// --------- Construtor com name e função lastname --------- 

function FullName(name, lastname) {
    this.name = name;

    this.lastname = () => {
        const nomeCompleto = `${this.name} ${lastname}`;
        return nomeCompleto;
    }
}

const rocker = new FullName("Ricardo", "Rocker");

console.log(`FullName: `, rocker.lastname());


// --------- Calculadora através de construtor--------- 

function Calculadora(n1, n2){
    this.soma = () => {
        return `${n1 + n2}`;
    }
    this.subtracao = () => {
        return `${n1 - n2}`;
    }
}

const calculadora = new Calculadora(1, 3);

console.log(calculadora.soma());
console.log(calculadora.subtracao());


// ---------  Calculadora através de construtor - 2 Forma   --------- 

function Calculadora2(){
    this.soma = (n1, n2) => {
        return `${n1 + n2}`;
    }
    this.subtracao = (n1, n2) => {
        return `${n1 - n2}`;
    }
}

const calculadora2 = new Calculadora2();

console.log(calculadora2.soma(6, 4));
console.log(calculadora2.subtracao(6, 4));


