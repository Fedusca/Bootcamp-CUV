// 3. Lista De Súper - Parte II
// En este ejercicio, deberás poner en práctica lo aprendido usando como base el ejercicio de la Lista de Súper - Parte I.

// Agregá dos nuevos productos al final de la lista.

// Agregá dos productos al principio de tu lista.

// Determiná cuán largo es el Arreglo en este momento.

// Sacá un producto y guardalo en una Variable que se llame noHabia.

// Sacá un producto y guardalo en otra Variable que se llame comprado.

// ¿Cuán largo es el Arreglo ahora?


let listaSuper = [];


listaSuper [0] = "sal";


listaSuper.push("Pan");
listaSuper.push("Jamon");

listaSuper.unshift("Coca");
listaSuper.unshift("Cafe");

let noHabia = listaSuper.shift();
let comprado = listaSuper.pop();
let ultimoElemento = listaSuper.length -1;

console.log(listaSuper.length);

console.log(ultimoElemento);

console.log("No habia " + noHabia);

console.log("Ya compre " + comprado);