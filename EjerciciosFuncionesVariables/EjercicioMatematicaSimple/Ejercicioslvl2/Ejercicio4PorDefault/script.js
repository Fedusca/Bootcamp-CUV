// 4- Por default
// En este ejercicio deberás agregar Parámetros por default a la Función, para que al ejecutarla no devuelva ningún error.

// const longitudDelNombre = (nombre) => nombre.length

// console.log( longitudDelNombre() ); // 0
// console.log( longitudDelNombre('Ana') ); // 3


const longitudDelNombre = (nombre = "") => nombre.length

console.log( longitudDelNombre() ); // 0
console.log( longitudDelNombre('Ana') ); // 3