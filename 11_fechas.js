//FECHAS

const today = new Date()
console.log(today);

//AÑO
console.log(today.getFullYear());

//MES
console.log(today.getMonth());

//DÍA (Domingo -->0)
console.log(today.getDay());
console.log(today.getDate());

// Hours
console.log(today.getHours());

console.log(today.getTime()); // cantidad de segundos desde el 1 de enero de 1970

//Formato de fecha
console.log(today.toString());
console.log(today.toDateString());
console.log(today.toTimeString());
console.log(today.toLocaleString());
console.log(today.toLocaleDateString());
console.log(today.toLocaleTimeString());

const fechaFutura = new Date("2030-08-02")