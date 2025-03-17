//BUCLES

// for (expression 1; expression 2; expression 3) {
//     // code block to be executed
//   }

/* Expression 1 is executed (one time) before the execution of the code block.
    -- used to initialize the variable(s) used in the loop (let i = 0).

 Expression 2 defines the condition for executing the code block.
    -- used to evaluate the condition of the initial variable (i < len).

Expression 3 is executed (every time) after the code block has been executed.
    -- do something on the initial variable (negative increment , positive increment, etc)*/




const palabra = "Abracadabra"

// i --> índice 

// Expression 1 sets a variable before the loop starts (let i = 0).
// Expression 2 defines the condition for the loop to run (i must be less than palabra length).
// Expression 3 increases a value (i++) each time the code block in the loop has been executed.


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

