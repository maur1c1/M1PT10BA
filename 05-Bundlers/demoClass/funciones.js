const constantes = require('./constantes')
console.log(constantes);

const sum = (a,b) => a + b;

const printName = (name)=>{
    console.log(name);
}

sum(constantes.num1, constantes.num2);

printName(constantes.nombre);

