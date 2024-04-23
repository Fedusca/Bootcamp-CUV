let parraf1 = document.getElementById("parr1");
let parraf2 = document.getElementById("parr2");
let btn = document.getElementById("boton")

btn.addEventListener("click", function(){
    let valorIngresado = document.querySelector("input").value;
    parraf1.textContent = valorIngresado;
    parraf2.textContent = valorIngresado;
    parraf1.style.color = "red";
    parraf2.style.color = "blue";
    parraf1.style.fontSize = "20px";
    parraf2.style.fontSize = "55px";
    parraf1.style.textTransform = "uppercase";
    parraf2.style.textTransform = "lowercase";
})

