//Eventos
//seleccionamos el elemento
let elemento = document.getElementsByTagName("button")

//trigger o disparador -----> escuchar al elemento seleccionado
//[0] selecciona al primer elemento con el mismo nombre
elemento[0].addEventListener("click", function(){
//Escribo lo que va a suceder cuando alguien haga click en el boton
 
 let num1 = 10;
 let num2 = 14;
 let resultado = num1 + num2;
 alert("El resultado de la suma es: " + resultado);
});

let cantidadEntradas = 0;
elemento[1].addEventListener("click", function(){
    cantidadEntradas++;
    
    console.log(cantidadEntradas + " tiquets comprados");
})


let h2 = document.getElementsByName("titulo"); // Seleccionamos el elemento
//creamos el evento para ese elemento seleccionado
h2[0].addEventListener("mouseover", function(){
    console.log("pasaste por encima del titulo")
})

let miBtn = document.getElementById("miBoton"); //Seleccionamos el elemento con ID=miBoton

miBtn.addEventListener("click", function(){
    alert("Click en mi boton");
    h2[0].style.color = "red"; // Con esta linea haces que luego de apretar click el h2 cambia de color
})


let input = document.getElementById("texto");
let btnObtener = document.getElementById("obtener");

btnObtener.addEventListener("click", function(){
    let valorIngresado = input.value;
    console.log("el usuario ingreso: " + valorIngresado)
})


