let n = 1; // Inicia un contador N con valor 1
let m = 1; // Inicia un contador M con valor 1
let mensaje = "";

while (n < 6){
    if(n == 1){
        mensaje += `¡Bienvenido, ${n}! `;
    } else{
        mensaje += `¡Bienvenido, ${n}! te presento ` ;
while(m < n && n > 1){
    if(n == 2){
        mensaje+= ` a ${m}.`
    }else if(n == 3){
        if (m == (n-1)){
            mensaje +=` y a ${m}.`
        } else{
            mensaje += ` a ${m}. `
        }
    }else{
        if (m == (n-2)){
            mensaje += `  a ${m}. `
        }else if(m == (n-1)){
            mensaje += ` y a ${m}. `
        }else{
            mensaje += ` a ${m},`
        }
    }
    m++;
}   
    }
    console.log(mensaje);
    mensaje = ""; // Reinicia la cadena de salida para la próxima iteración.
    n ++;   // Incrementa 'n' en cada iteración del bucle externo.
    m = 1; // Reinicia 'm' a 1 para la próxima iteración.

}
