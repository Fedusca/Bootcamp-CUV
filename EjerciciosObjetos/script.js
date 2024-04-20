//Pedir por prompt nombre de sus familiares directos(Padre, Madre, etc)
//guardar esos nombres en un objeto.
//y luego agregar el atributo mascota con el nombre mascota
//finalmente mostrar la madre y la mascota

let familiares = {
  padre: prompt("Ingresa el nombre de tu padre"),
  madre: prompt("Ingresa el nombre de tu madre"),
  hermano: prompt("Ingresa el nombre de tu hermano"),
  abuela: prompt("Ingresa el nombre de tu abuela"),
  abuelo: prompt("Ingrese el nombre de tu abuelo"),
};

familiares.mascota = "boris";

console.log(
  "Mi mama se llama " +
    familiares.madre +
    " y mi gato se llama: " +
    familiares.mascota
);
