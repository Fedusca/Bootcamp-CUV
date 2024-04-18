/*
Lista de compras

Pedir al usuario que ingrese una lista de productos a comprar.
Mostrar cuantos productos se agregaron a la lista.
Aclaracion: si ingresa "NO", significa que no quiere ingresar más productos
*/

let listaDeCompras = [];
let producto;
let contador = 0;
let continuar = true;

while(continuar) {
  producto = prompt("Ingresa un producto a comprar o escribe 'NO' para finalizar:");
  if(producto.toUpperCase() === "NO") {
    continuar = false;
  } else {
    listaDeCompras[contador] = producto;
    contador++;
  }
}

alert("Has agregado " + contador + " productos a la lista." + "los productos son : " + listaDeCompras);