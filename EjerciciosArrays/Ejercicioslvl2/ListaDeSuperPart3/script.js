// Ejercicios
// 1. Lista de Súper - Parte III
// Volvé al ejercicio anterior y seguí estos pasos:

// Usá un for Loop y mostrá cada ítem de listaDeSuper en la consola.
// Refactoreá tu código de manera tal que el for loop viva dentro de una Función que se llame logItems. La Función deberá tomar un Arreglo como Parámetro e imprimir sus elementos en la consola.

// Invocá logItems 2 veces, pasando listaDeSuper la primera vez y otro Arreglo la segunda vez (deberás crear uno nuevo).
// Refactoreá el código de logItems para que use .forEach() en vez de un for loop.



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

logItems(listaSuper);

let listaSuper2 = ["Arroz", "Leche", "Azúcar"]; 
logItems(listaSuper2); 

// function logItems(productos) {
//     console.log("la lista de los productos son: " + listaSuper);
//     for (let i = 0; i < listaSuper.length; i++) {
//       console.log(listaSuper[i]);
//     }
// }
// Refactoreá el código de logItems para que use .forEach() en vez de un for loop.
    function logItems(productos) {
        console.log("Productos de compras son: " + listaSuper);
        listaSuper.forEach(item => {
            console.log(item);
        });  


}


