/*let numeroUsuario = parseInt(prompt("Ingrese un numero del uno al diez"));
let numeroRandom = Math.ceil(Math.random() *numeroUsuario);

let intentos = 3;

let contador = 1;

while(contador <= intentos){
    let numeroLanzado = parseInt(prompt("Ingrese un numero entre 1 y 10"));
if(numeroRandom == numeroLanzado){
            alert("Acerto, en el intento " + contador + " El numero era" + numeroRandom);
}else{
            alert("No era ese el numero!");
        }
    contador++;
}*/



let numeroUsuario = parseInt(prompt("Ingrese un numero del 1 al 10"));

let numeroRandom = Math.ceil(Math.random() *numeroUsuario);
let respuesta = parseInt(prompt("¿Cual es el numero secreto?"));
let contador = 0;



while(numeroRandom != respuesta){
    
    if(respuesta < numeroRandom){
        alert("El numero es menor al numero secreto")
    } else if(respuesta > numeroRandom){
        alert("El numero es mayor al numero secreto")
    }else if(respuesta < numeroRandom){
        alert("No ingresaste un numero valido")
    }
    respuesta = parseInt(prompt("¿Cual es el numero secreto?"));
    contador++;
}

    alert("Acertaste! en el intento " + contador);

   

