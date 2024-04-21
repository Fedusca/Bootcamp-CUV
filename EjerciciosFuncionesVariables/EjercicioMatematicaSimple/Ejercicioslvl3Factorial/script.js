// Nivel 3
// Factorial()
// En este ejercicio, deberás crear una Función factorial que reciba un número y devuelva el factorial de este número.

// Por ejemplo, si hacemos factorial(5) la Función deberá hacer la operación 5x4x3x2x1 y devolver el resultado: 120.

// Para hacer el ejercicio, tené en cuenta estas indicaciones:

// Deberás hacer una Variable para almacenar el resultado.
// Deberás usar un Loop hasta alcanzar el número que recibís como input.
// En cada vuelta del Loop deberás actualizar el resultado para no caer en un Loop infinito.
// En caso de que el usuario ingrese 0 o un número negativo, deberás generar acciones compatibles con la definición del Factorial de un Número.

let resultado = 1;
let contador = 1;

function factorial(numero) {
  if (numero < 0) {
    return "No se puede calcular el factorial de un número negativo.";
  } else if (numero === 0) {
    return 1;
  } else {
    contador  
    while (contador <= numero) {
      resultado *= contador;
      contador++;
    }
    return resultado;
  }
}

console.log(factorial(5)); 
console.log(factorial(2)); 
console.log(factorial(10));
console.log(factorial(0)); 
console.log(factorial(-3));  