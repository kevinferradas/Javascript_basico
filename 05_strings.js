//STRINGS

let palabra = "Abracadabra"

// Métodos de JS para STRINGS

//length --> obtener la longitud de la cadena
console.log(palabra.length);

console.log(palabra[3]);

// at(posicion) -->
console.log(palabra.at(-2));

// Métodos para pasar el texto a mayúsculas y minúsculas
let palabraMayus = palabra.toLocaleUpperCase()
palabra = palabra.toLocaleUpperCase() // a mayúsculas

palabra = palabra.toLocaleLowerCase() // a minúsculas

//trim() --> strip() de Python
palabra2 = "           " + palabra + "           "
console.log(palabra2.length);
console.log(palabra2);
palabra2= palabra2.trim()
console.log(palabra2.length);

//replace("caracter/es a cambiar","Lo que pones") --> Solo cambia la primera aparición

console.log(palabra.replace("ab","ez"));

//replace("caracter/es a cambiar","Lo que pones") --> Cambia todas las apariciones

console.log(palabra.replaceAll("a","i"));

let frase = "Como no estudies Javascript te vas a enterar"

// startsWith (caracter/es de inicio)
console.log(frase.startsWith("Como"));
console.log(frase.startsWith("como"));

// endsWith (caracter/es al final)
console.log(frase.endsWith("rar"));
console.log(frase.endsWith("ra"));

//slice
console.log(palabra.slice(1));
console.log(palabra.slice(1,4));

// split(elemento separador) --> es un array (lista)
console.log(frase.split(" "));

let lista = [] // array vacío
//ejercicio

let nombre = "mAriA de LaS mercerDes y dE TOdaS lAs SantAS"

// SOLUCION KEVIN

// let lista_articulos=["de","la","las","del","y"]

// nombre = nombre.toLocaleLowerCase()
// lista_palabras = nombre.split(" ")

// for (palabras of lista_palabras) {

//     if (palabras in lista_articulos) {
//         continue
//     }
//     else {
//         palabras[0]=palabras[0].toLocaleUpperCase()
//     }
//     console.log(palabras);
// }

// SOLUCION FERRAN

// Paso 1: convertir todo en minúsculas

nombre=nombre.toLowerCase()

// Paso 2: obtener las palabras  --> split (" ")
nombre = nombre.split(" ")

let nombreCorregido = ""
for (palabra of nombre){

    console.log(palabra);
    if (palabra !="de" && palabra !="las" && palabra !="y" && palabra !="los"){
        let inicial = palabra.at(0).toUpperCase()
        let restoNombre = palabra.slice(1)
        palabra=inicial + restoNombre
        
    }

    nombreCorregido += palabra + " "
}
nombreCorregido