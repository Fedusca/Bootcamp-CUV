let i = 0; //contador para utilizar en el While
let boton = document.getElementsByClassName("comprar"); //selecciono todos los elementos con clase "comprar"
let carrito = document.getElementById("carrito"); //selccionamos el div con ID = "carrito"

let texto_carrito = "";

console.log(boton.length); //cant de botones (longitud)

while (i < boton.length) {
  let boton_id = boton[i].getAttribute("id"); //obtener el ID de cada boton
  let precio = boton[i].getAttribute("data-precio"); //accedo al atributo data-precio
  let descripcion = boton[i].getAttribute("data-producto"); //accedo al atribito data-producto

  texto_carrito = boton_id + " - " + descripcion + " [ $" + precio + " ]";

  //agregamos el Oyente del evento "click" a cada boton particular
  boton[i].addEventListener("click", function () {
    //lo que hago cuando se dispare el evento "click"

    carrito.textContent = texto_carrito;

    //alert("comprar " + boton_id + " - $" + precio);
    console.log(
      "Comprando... " + boton_id + " - " + descripcion + " [ $" + precio + " ]"
    );
  });

  i++;
}