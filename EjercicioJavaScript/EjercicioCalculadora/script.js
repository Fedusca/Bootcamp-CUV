//Calculadora
var operacion = prompt("Ingresa la operacion (+, -, *, /):");
var valor1 = parseFloat(prompt("Ingresa el primer numero"));
var valor2 = parseFloat(prompt("Ingresa el segundo numero"));
var resultado;


if (operacion == '+') {
  resultado = valor1 + valor2;
} else if (operacion == '-') {
  resultado = valor1 - valor2;
} else if (operacion == '*') {
  resultado = valor1 * valor2;
} else if (operacion == '/') {
  resultado = valor1 / valor2;
} else {
  alert("Operacion no válida");
}


if (resultado) {
  alert("El resultado de la operacion es: " + resultado);
}
// Resultado PAR o INPAR
if (resultado) {
    if (resultado % 2 == 0) {
      alert("El resultado es un numero PAR");
    } else {
      alert("El resultado es un numero IMPAR");
    }
  } 