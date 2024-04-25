// 2. Reverse
// En este ejercicio deberás crear una Función que imprima por consola un Arreglo con sus elementos invertidos, sin modificarlo. 
// Luego, deberás hacer una Función que lo modifique e invierta el orden de sus elementos.

let array = ["a" , "b" , "c", "d"];

let large = array.length -1;

let i = large -1;

function printReverse(Arreglo){
    for (let i = Arreglo.length - 1; i >= 0; i--) {
        console.log(Arreglo[i]);
    }
}

printReverse(array);


let arrayReverse = array.reverse();

console.log(arrayReverse);