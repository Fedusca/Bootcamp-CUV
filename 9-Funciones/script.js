//Funciones

//DRY = Don't Repeat Yourself (No repitas )

//Funcion es un bloque de codigo que escribimos una vez, y lo utilizamos
// todas las veces que nosotros querramos

// Declaro = Creando
// Asigno  = Dando valor

// Forma de DECLARAR una funcion
// function sumar(){
//     let a = 10;
//     let b = 20;
//     //let resultado = a + b; (Es lo mismo que) ---------------->  alert(a + b);
//     alert(a + b);
// }

// 1) Que funcione
// 2) Empezar aplicar buenas practicas
// 3) "Acortar" el codigo

// Forma de "llamar" o  "Utilizar" una funcion

//sumar(); //Ejecutando la funcion SUMAR (INSTANCIAR)

// if(1 == 1){
//     sumar();
// }

// let i = 2
// while(i >= 1){
//     sumar();
//     y--;
// }


function sumar(num1 , num2){
    alert(num1 + num2);
}

sumar(30 , 10); //Ejecutando mi function, pasandole 2 valores
sumar(2,5);
sumar(0 , 9);

let a = 15;
let b = 5;

sumar(b , b); //10
// El usuario ingresa los numeros desde un prompt
let x = parseInt(prompt("Ingrese un numero"));
let y = parseInt(prompt("Ingrese un numero"));

sumar(x , y);


// Return en funciones

//Function SUMA  2 numeros y devuelve el resultado
function suma(n1, n2){
    let resultado = n1 + n2;
    return resultado;
}

//Function RESTA  2 numeros y devuelve el resultado
function suma(n1, n2){
    let resultado = n1 - n2;
    return resultado;
}

//Function que MUESTRA un texto en un alert, segun el valor recibido por parametros
function mostrarResultado(res){
    alert("el resultado es = " + res)
}

let operacion1 = suma(50, 20);
mostrarResultado (operacion1);

let operacion2 = resta(42, 40);
mostrarResultado (operacion2);



//Crear una funcion que reciba 2 parametros (nombre y apellido)
// y retorne/devuelva el nombre y apellido unidos por una , (Federico, Gomez)
//Lo muestro en un alert


//Declaro una Funcion

function nombreCompleto(nombre, apellido){
    //forma larga
    let res = nombre + " , " + apellido;
    //return res;

    //forma corta
    return(nombre," , ", apellido);
}

//  OBJETOS
//par clave = valor
//Los objetos llevan clave : valor  Eh: <input type="text"> clave: type, valor : text
let usuario = {
//clave : valor
    nombre:"Federico", 
    email:"Federico@gmail.com",
    telefono: 12345678,
    mayorEdad: true,
    nacionalidad: "Argentino"
}

//Para acceder y/o agregar y/o modificar una propiedad/atributo
//Mostar datos del objeto
//dot notation (notacion de puntos)
console.log(usuario.telefono); //Acceso al valor telefono del usuario

//Corchetes
console.log(usuario["email"]); //Acceso al valor telefono del usuario

usuario.altura = 175; //Agregar el atributo Altura al obj
usuario["altura"] = 175; //Agregar el atributo Altura al obj


//let num = 1; VARIABLE

//let arreglo/array =["h", "f", "t"]; 

//let OBJETO ={
//     --------------
//     --------
//     --------
//}

//AGREGAR un atributo / propiedad
usuario.colorOjos = "verdes"; // notacion puntos (dot notation)

usuario["colorOjos"] = "marrones"; // notacion corchetes

//Modificar un atributo o propiedad
usuario.mayorEdad = false; // notacion de puntos (dot notation)
usuario["mayorEdad"] = false; // notacion corchetes
