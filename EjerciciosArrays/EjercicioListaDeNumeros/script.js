// Pedirle al usuario que ingrese números hasta que ingrese la palabra "stop".
// Ir guardando esos números y mostrar: 
// - la cantidad de números ingresados 
// - el 3º y último número ingresado
// - la suma de todos los números ingresados
// mensaje realizarlo con CONSOLE.LOG


let numero = [];
let listaNumeros;
let contador = 0;
let continuar = true;
while(continuar){
    listaNumeros =prompt("Ingrese los numeros a sumar o poner STOP para finalizar");
    if(listaNumeros.toUpperCase() === "STOP" ){
        continuar = false;
    }else{
        numero[contador] = parseFloat(listaNumeros);
        contador++;
    }
}

console.log("los numeros ingresados son: " + numero);
console.log("La cantidad de numeros ingresados son: " + contador);
console.log("El numero de la posicion 3 y el ultimo son: " + numero[2] + " y " + numero[numero.length - 1]);
 
let sumaTotal = 0;
let i = 0;

while(i < numero.length){
    sumaTotal += numero[i];
    i++;
}

console.log("La suma de todos los numeros ingresados es: " + sumaTotal);