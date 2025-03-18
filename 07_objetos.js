// OBJETOS

// Son como los diccionarios de Python

let alumno = {}

alumno ["nombre"] = "Maria"
alumno ["apellido"] = "Pi"
alumno ["edad"] = 25

let alumno2 = {nombre : "Pep", apellido : "Guardiola", edad : 55} // la propiedad también puede ir entre comillas. Ej: "nombre":"Pep"
alumno2.cp = "08041"




let clase = {
    alumnos:[
        alumno,alumno2
    ]
}

for (claves in alumno) {
    console.log(claves, alumno[claves])
}