//ARRAYS

// listaa= [1,2,3]
// console.log(listaa[4]);
// listaa[5]=[5]
// listaa
// console.log(listaa[-1]); 
// Un array puede contener cualquier tipo de dato
// let frutas = [1, 1.2, "Hola", true, [4, 6, 7]]
let frutas = ["kiwi", "pera", "fresa", "pomelo"]
//               0       1        2        3
console.log(frutas);
frutas[0] = "limón"
console.log(frutas);

console.log(frutas.at(-1));



// El tamaño de un array. En Python era len(lista)
let arraySize = frutas.length
console.log(arraySize);

// Como añadir un elemento al final : push(elemento_a_añadir)

frutas.push("mandarina")
console.log(frutas);

//Cómo eliminar el último elemento: pop()
let frutaEliminada = frutas.pop()
console.log(frutas);
console.log(frutaEliminada);

// Cómo añadir un elemento al principio: unshift(elemento_a_añadir)

frutas.unshift("mandarina")
console.log(frutas);

// Cómo eliminar el elemento inicial: shift()
frutaEliminada = frutas.shift()
console.log(frutas);
console.log(frutaEliminada);

// Pasar el array a texto
console.log(frutas.toString());
console.log(frutas.join(" "));

// Obtener la posición de un elemento: indexOf(elemento)
console.log(frutas.indexOf("limón"));

frutas.push("fresa")
console.log(frutas);
console.log(frutas.indexOf("fresa")); // empieza por el inicio
console.log(frutas.lastIndexOf("fresa"));

//Revertir una copia del array

let arrayAlReves = frutas.toReversed()

//Revertir el array
frutas.reverse()
console.log(frutas);

// Cortar el array

let extraccion = frutas.slice(1,3)
console.log(extraccion);

// Ordenar el array y guardarlo en una copia
// toSorted ordena los elementos de menor a mayor
let frutasOrdenadas = frutas.toSorted()
console.log(frutasOrdenadas);

// Ordenar el array
frutas.sort()
console.log(frutas);

// Destructuring

let [fruta1, fruta2, fruta3, fruta4, fruta5] = frutas
console.log(fruta1);

// Se pueden unir dos arrays

