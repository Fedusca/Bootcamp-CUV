// 3- Fix it
// En este ejercicio deberás arreglar las siguientes Arrow Functions.

// let nombreCompleto = (nombre, apellido) =>
//   "¡Hola, " + nombre + " " + apellido + "!";
// let exclamar = str => {
//  `str`
// }
// let mayusculas = (str) => return str.toUpperCase()
// let minusculas = (str) => str.toLowerCase()
// Salida por consola esperada:

// console.log( nombreCompleto('Ada', 'Lovelace') ); // Ada Lovelace
// console.log( exclamar('Hedy') ); // ¡Hedy!
// console.log( mayusculas('grace') ); // GRACE
// console.log( minusculas('SHERYL') ); // sheryl

let nombreCompleto = (nombre, apellido) =>
`¡Hola , ${nombre} ${apellido} !`;


let exclamar = str => `¡ ${str} !`;

let mayusculas = str => str.toUpperCase();

let minusculas = str => str.toLowerCase();

console.log( nombreCompleto('Ada', 'Lovelace') ); // Ada Lovelace
console.log( exclamar('Hedy') ); // ¡Hedy!
console.log( mayusculas('grace') ); // GRACE
console.log( minusculas('SHERYL') ); // sheryl