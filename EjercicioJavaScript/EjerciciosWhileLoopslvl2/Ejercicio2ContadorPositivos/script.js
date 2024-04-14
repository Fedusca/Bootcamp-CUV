let num = parseInt(prompt("Ingrese un numero entero (Si quiere salir ingrese un numero negativo)"));
let contador = 0
while( num >= 0){
    contador++;
    num = parseInt(prompt("Ingrese un numero entero (Si quiere salir ingrese un numero negativo)"));
}

alert ("ingresaste " + contador + "numeros positivos");   // alert (`ingresaste ${contador} numeros positivos `) Template Literals o Template Strings