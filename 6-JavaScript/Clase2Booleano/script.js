/* Estructura condicional IF

if(condicion){
    .....
    ...
    ...
}


if(condicion){
    ...
    ...
    ..;
}else{
    ......
    ...
    ...;
}
*/


let edad=30;

//quiero mostrar en un ALERT un texto solo si la edad es mayor o igual a 25

if(edad >=25){
alert("La condicion SI se cumple");
} else{
alert("La condicion NO se cumple");
}



//Operadores matematicos/Ariméticos de comparación
/*
- MAYOR QUE (.. > ..)
- MENOR QUE  (.. < ..)
- MAYOR O IGUAL (.. >= ..)
- MENOR O IGUAL (.. <= ..)
- IGUAL (.. == ..)
- DISTINTO (.. != ..)
*/

/*
1) 25 >= 40 -------> False
2) 25 >= 25 -------> True
3) "hola" == 20.4 -----> False
4) "hola" == "hola"  ----> True
5) "hola" != 20.4 ------> True 
*/

/*
 OPERADORES LOGICOS
 - AND (Y) ------> &&
 - OR  (O) ------> ||
 - NOT (negación) ----> !


 Ej:
 Condicion1 && Condicion 2
 Condicion1 || Condicion 2
 !condicion1
*/

/*
let numero = prompt ("Ingrese su edad");

alert (typeof numero); //34 (TYPEOF, ME DICE QUE TIPO DE DATO ME TIRA)

parseInt(numero) // parseInt ------> Conviertir un String a un numero entero
parseFloat("45.9") // parseFloat --> Convierto un String a un numero decimal
*/

if (condicion1){
    if (condicion2){
        algo
    }
}else{  

}
