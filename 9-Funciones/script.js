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