//alert("Esta es la forma externa");


/* TIPOS DE DATOS */

/*
12345 -------------> Numero/Entero/(INT)
12345.98-----------> Numero/Decimal/Flotante/(float)

Las "" Hace que los numeros se conviertan en cadena de caracteres (STRING)

"texto" -----------> Cadena de caracteres/(STRING)
"12345" -----------> Cadena de caracteres/(STRING)
"hola123" ---------> Cadena de caracteres/(STRING)

Booleano
true --------------> Boolean/Booleano
False -------------> Boolean/Booleano

null --------------> Valor vacio
undefined ---------> no tiene valor definido (Aún)


*/

// Variables = Un lugar donde se puede almacenar datos.
// Tecnica hablando: Es un espacio reservado de memoria

var nombre_de_la_variable; // declaré mi variable (Crear)
nombre_de_la_variable = 456; // Asignando un valor a la variable

var apellido = "Lopez"; // Declarando y asignando un valor o dato a mi variable

//  Para crear una variable utilizo la siguiente formula
//  Palabra_Reservada nombre_variable = Valor
//  EJ :     var      ListadoClientes = "Listado"


//Si esta permido
var nombre_completo // Guiones Bajos;
var nombreCompleto  //Camel Case (Notacion Camello);
var usuarioLogueado
var cliente2 //Utilizar numeros al final (NO ES BUENA PRACTICA)

//No esta permitido

var var; // No puedo nombrar a mi variable con una palabra reservada
var nombre.apellido;  // No puedo utilizar puntos
var 123listado; // No puedo comenzar por un número
var gustos; // helados; No puedo utilizar ; en el nombre
var acción; // No puedo utilizar acentos
var añoCreacion;// No puedo utilizar la Ñ
var pingüinos; // No puedo usar la dierisis 
//!,@#% No se pueden simbolos RAROS

//Ejemplos

var iva = 21;
var total = 1976.24;
var nombre_cliente = "Agustina Perez";
var userLogin = true;
var modeDark = false;
var dispositivoPrendido = "aspiradora"
var texto = 'Este es un texto de prueba'

var album;
var cancion;
var banda;
var duracionCancion;
var nombre_cliente


let suma = 12;
let bandaRock = "Imagine Dragons"
const pi = 3.1416;

//suma --------------------> Se suman los numeros
let num1 = 100;
let num2 = 1.4;
let miVariable = num1 + num2; //101.4

// Concatenar (unir) ------> Se concatenan los string
let color = "rojo"
let edad = 34;
let pais = "Argentina - "
let res =pais + color + edad; //Argentina - rojo34

alert(res); //Argentina - rojo34

/*

Ejercicio:
Guardar en variables sus nombres apellidos y edad y mostrarlo en un alert
*/