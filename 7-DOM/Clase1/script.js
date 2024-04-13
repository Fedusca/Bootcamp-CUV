console.log("Estoy en la consola para explicar el DOM");

/*
---> manipular el texto y el contenido
    .textContent (solo es para elementos que muestren texto h1,span,p)
    .innerHTML (podemos modificar el contenido del elemento)

---> manipular atributos 
    .getAttribute("nombreDelAtributo") ----> nos devuelve el valor del atributo
    .setAttribute("nombreDelAtributo", "url") ----> Define un valor para el atributo
*/

// let titulo = document.querySelector("h1");
// let parrafo = document.querySelector("p");
// let contenedor = document.querySelector("#contenedor");
// let nombre = prompt ("Ingrese su nombre")
// titulo.textContent = "Nuevo titulo del DOM";
// parrafo.textContent = "nuevo contenido de nuestro parrafo";

// contenedor.innerHTML =
// `<P> Hola ${nombre}, bienvenido a mi pagina web, ahora estamos viendo DOM</P>`;

// let imagen = document.querySelector("img")
// let enlace = document.querySelector("#enlace")

// imagen.setAttribute ("src", "https://img.freepik.com/foto-gratis/aislado-feliz-sonriente-perro-fondo-blanco-retrato-2_1562-691.jpg")
// imagen.setAttribute("alt", "imagen del perrito")

// enlace.setAttribute("href","https://pledu.plataforma5.la/javascript-full-stack-para-principiantes/01---html/ejercicio-1-ab51f316")

// enlace.setAttribute("target", "_blank")

let contenedor = document.getElementById("practicandoWhile")

let agregandoProductos = prompt("desea agregar productos").toLowerCase()
let totalProductos = ""

while(agregandoProductos == "si"){
    let producto = prompt("Ingrese el nombre del producto")
    let precio = parseInt(prompt("Ingrese el valor del producto"))
    let id = Math.ceil(Math.random() *100000)

   
    totalProductos += `<div class=prod> id: ${id} producto: ${producto} - precio: $ ${precio}</div>`
    agregandoProductos = prompt("desea agregar productos?").toLowerCase()
}

contenedor.innerHTML = totalProductos