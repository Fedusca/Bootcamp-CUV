let numero = parseInt(prompt("Ingrese un numero"));
let sumatoria = 0;
let contador = 0;
let texto = "0";
while(numero > contador){
    contador = contador + 1;
    sumatoria = sumatoria + contador;
    texto = texto + " + " + contador;
}

alert("la sumatoria de " + numero + " es " + texto + " = " + sumatoria);