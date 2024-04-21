// Ejercicio Práctico
// En este ejercicio deberás convertir las siguientes Funciones a Arrow Functions:

// 1
// function sumarLosTres(num1, num2, num3) {
//  return num1 + num2 + num3
// }

// 2
// function cuadrado(num) {
//  return num * num
// }

// 3
// function decirHola() {
//  console.log('¡Hola!');

// 1
let sumarLosTres = (num1, num2, num3) => num1 + num2 + num3;

console.log(sumarLosTres(3, 4, 6));


// 2

let cuadrado = num => num* num;

console.log(cuadrado(3));


// 3

let decirHola = () => "Hola";

console.log(decirHola());