let num = parseInt(prompt ("Ingrese un numero mayor a 0"));

while(num > 0 ){
 if(num){
    if (num % 2 == 0) {        //if (!(num % 2)) Es lo mismo
        alert("El resultado es un numero PAR");
      } else {
        alert("El resultado es un numero IMPAR");
      }
    num = parseInt(prompt ("Ingrese un numero mayor a 0"));
 }
}