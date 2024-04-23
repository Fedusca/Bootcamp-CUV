// Ejercicio: hacer una calculadora con 2 inputs y un boton de suma.
// cuando el usuario haga click en el boton, se sumen los 2 valores ingresados en
//  cada input.
// mostrarlo por alert o console.log

let num1 = document.getElementById("numero1");
let num2 = document.getElementById("numero2");
let btnSuma = document.getElementById("suma");
let btnResta = document.getElementById("resta");
let btnMulti = document.getElementById("multi");
let btnDiv = document.getElementById("div");

btnSuma.addEventListener("click", function(){
   let resultado = parseFloat(num1.value) + parseFloat(num2.value);
   alert("El resultado es " + resultado);
})

btnResta.addEventListener("click", function(){
    
    let resultado = parseFloat(num1.value) - parseFloat(num2.value);
    alert("El resultado es " + resultado);
 })

 btnMulti.addEventListener("click", function(){
    
    let resultado = parseFloat(num1.value) * parseFloat(num2.value);
    alert("El resultado es " + resultado);
 })

 btnDiv.addEventListener("click", function(){
    
   let resultado = parseFloat(num1.value) / parseFloat(num2.value);
   alert("El resultado es " + resultado);
})