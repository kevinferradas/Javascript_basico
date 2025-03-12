//BUCLES

const palabra = "Abracadabra"

// i --> índice 
for (let i=0;i < palabra.length; i++){

    // palabra[i] = palabra[i].toLocaleLowerCase()
    // console.log(palabra); // No funciona

    if (palabra[i].toLocaleLowerCase() == "a"){
        continue
    }
    // if (palabra[i]=="c"){
    //     break
    // }
    console.log(palabra[i]);
}

//for .. of 
// Si lo que viene después del for es una sola línea, no son necesarias las llaves.
for (letra of palabra) console.log(letra)

// while

let control = true
let i = 0
while (control){

    console.log("Hola");

    if (i == 3){
        control = false
    }
    
    i += 1  // Esto es lo mismo que i++
}

let condicion = "jueves"
do {

    console.log("Estaría bien que hoy fuera viernes");
} while (condicion == "miercoles") 

