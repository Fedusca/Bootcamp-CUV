let datoUsuario;
let datoPc;
let resultadoRandom
let eleccion;
let gano = false;

while(!gano){
    datoUsuario = prompt("Ingrese: Piedra, papel o tijera").toLowerCase();
    eleccion = (datoUsuario === 'piedra' || datoUsuario === 'papel' || datoUsuario === 'tijera');
    resultadoRandom = Math.floor(Math.random() *3);

    if(resultadoRandom === 0){
        datoPc = 'piedra';
    }else if(resultadoRandom === 1){
        datoPc = 'papel';
    }else{
        datoPc = 'tijera';
    }

    if(eleccion){
        if(datoUsuario === datoPc){
            alert("empate, ambos eligieron " + datoUsuario);
        }else if((datoUsuario === 'piedra' && datoPc=== 'tijera') || (datoUsuario === 'papel' && datoPc === 'piedra') || (datoUsuario === 'tijera' && datoPc === 'papel')) {
            alert("Ganaste! " + " La pc eligio: " + datoPc);
            gano = true;
        }else{
            alert("Perdiste " + " la pc eligio: " + datoPc);
        }
    }else{
        alert("Eleccion no valida , por favor ingrese Piedra, Papel o Tijera.");
    } if(gano){
        gano = !confirm ("Queres jugar otra vez?");
    }
}





