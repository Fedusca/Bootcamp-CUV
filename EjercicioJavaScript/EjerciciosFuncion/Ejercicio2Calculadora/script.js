//Crear una calculadora, pidiendo al usuario que:
// 1) Ingrese la operacion que desea realizar
// 2) Pedirle que ingrese 2 numeros
// 3) Realizar la operacion matematica elegida
// 4) Mostrar el resultado con un alert

// ACLARACION: Utilizar funciones
// ACLARACIO2 : No puedo dividir por 0

let num1 = parseFloat(prompt("Ingrese un número"));
let operacion = prompt("Ingrese la operación: suma, resta, división, multiplicación");
let num2 = parseFloat(prompt("Ingrese otro número"));


function calculadora(operacion, num1, num2){
    if(operacion === "suma" || operacion === "+"){
        return num1 + num2;
    }else if(operacion === "resta" || operacion === "-"){
        return num1 - num2;
    }else if(operacion === "división" || operacion === "/"){
        if(num2 === 0){
            alert("No se puede dividir por 0");
            return null;
        } else{
            return num1 / num2;
        }
    }else if(operacion === "multiplicación" || operacion === "*"){
        return num1 * num2;
    } 
}


let resultado = calculadora(operacion, num1, num2);
if(resultado !== null){
    alert(`El resultado de la operación es: ${resultado}`);
}


