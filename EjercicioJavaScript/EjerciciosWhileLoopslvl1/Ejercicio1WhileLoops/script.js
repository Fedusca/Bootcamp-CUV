let num = -10;
console.log("Numeros entre -10 y 19: ");
while(num <= 19){
    console.log(num);
    num ++;
}

let par = 10
console.log("Numeros pares entre 10 y 40");
while(par <= 40){
    if(par % 2 == 0){
    console.log(par);
    }
    par++;
}

let inpar = 300;
console.log("Numeros inpares entre 300 y 333");
while(inpar <= 333){
    if(inpar % 2 != 0){
        console.log(inpar);
    }
    inpar++;
}

let div = 5;
console.log("Numeros divisorios entre 5 y 50 que son divisibles por 5 y 3 al mismo tiempo");
while(div <= 50){
    if(div % 3 == 0 && div % 5 == 0){
        console.log(div);
    }
    div++;
}