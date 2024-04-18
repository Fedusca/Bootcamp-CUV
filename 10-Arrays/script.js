// Variables
let dia1 = "lu";
let dia2 = "ma";
let dia3 = "mi";
let dia4 = "ju";
let dia5 = "vi";
let dia6 = "sa";
let dia7 = "do";

// Arrays
//           0  ,  1   ,  2 ,  3  ,  4 ,  5 , 6
let dias = ["lu", "ma", "mi", "ju","vi","sa","do"];

alert(dias [4]); // Muestra "vi" en 1 alert

alert( dias [7]); // undefined

alert("cantidad de elementos " + dias.length); //Conocer la longitud de mi array (cantidad de elementos)

valorDolar = [1000, 1021, 1040, 1032 ];
clientes = ["cliente1", "cliente2", "cliente3"];

let miArray = []; // crear un array

// Agregar datos a un array

miArray[0] = "Emiliano";
miArray[1] = "Santino";
miArray[2] = null;
miArray[3] = "Laura";

//[ "Emiliano", "Santino" , , "Laura"]

//alert("Length miArray = " + miArray.length)
//alert(miArray[2]);


console.log(); // Texto o lo que quiero mostrar en Consola
let colores = [];
colores[0] = "rojo";
colores[1] = "amarillo";
colores.push("azul"); // Agrega un elemento al final del array
colores.push("negro", "blanco", "verde"); //Agrega 3 elementos más
console.log(colores.length);

console.log(colores);
console.log("Longitud total = " + colores.length);


console.log("El elemento de la posicion 4 es: " + colores[3]); //Muestra el amarillo(solo el de esa posicion)
 // Push -----> agrega un elemento al final del array. EJ: miArray.púsh("algo")
 // Pop ------> Elimino el ultimo elemento de un array. EJ: miArray.pop()

colores.pop(); //Elimine el ultimo elemento (Verde)

console.log(colores);

// Shift -----> Elimino el primer elemento del array.

colores.shift();
console.log(colores);

//unshift -----> agregar un elemento al comienzo del array
colores.unshift("Primer elemento");
