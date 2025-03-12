// VARIABLES

// Reasignación de valores
var num1 = 1
var num1 = 5

let num2 = 2
num2 = 3
// let num2 = 4 // no se puede reasignar con let

const mensaje ="Es el momento del descanso"
// mensaje = " Pues no habrá descanso"

let num3

console.log(typeof num3);
num3 = 2.5
console.log(typeof num3);

// Destructuring
let [txt1, txt2, txt3] = ["a","b","c"]
console.log(txt1,txt2,txt3);
console.log(typeof txt1);

let saludo = "Hola"
let num4 = 3

console.log(saludo + num4);
console.log(saludo * num4);
console.log(eval("4 + 5 / 6")); // Esto NO usar
console.log("5" + num4);
console.log("5" - num4);
console.log("1" == 1); // solo compara valor
console.log("1"===1); // compara tipo y valor
console.log("1" !==1);

console.log(1/0);