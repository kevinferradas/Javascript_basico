// FUNCIONES



// Creación " clásica" 

// Llamada o invocación
num3= sumar (5,7)
console.log(num3);

// Declaración
function sumar(num1, num2) {

    return num1 + num2
}



console.log(corregirNombre("mAriA de LaS mercerDes y dE TOdaS lAs SantAS"));
console.log(corregirNombre("jOsÉ mARiA del CóDigo"));

function corregirNombre(nombre){
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

    return nombreCorregido
}

//======================================================
// Sistema 2

let sumar2 = function (num1,num2) {

    return num1 + num2
} 
console.log(sumar2(3,4));

// con este sistema, ya no podemos poner la invocación delante de la declaración.

//=======================================================
// Sistema 3 ( ARROW FUNCTION)



let sumar3 = (num1,num2) => {
    return num1 + num2
}
console.log(sumar3(3,4));


//=======================================================
// Sistema 4 ( ARROW FUNCTION)


let sumar4 = (num1,num2) =>  num1 + num2
console.log(sumar4(3,4));

//=======================================================
// Sistema 5 ( ARROW FUNCTION)


let sumar5 = num1=>  num1*num1
console.log(sumar5(3));


const listaFrutas = ["kiwi", "piña", "pera"]
listaFrutas.forEach( (fruta) => {
    console.log(fruta);
})
