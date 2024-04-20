let amigos = ["Carlos", "Pedro", "Maxi", "Pancho", "Maxi"];

if (amigos.includes("Félix")) {
    console.log("Tengo un amigo que se llama Félix");
} else {
    console.log("Sería bueno tener un amigo que se llame Félix");
}

function verificarAmigo(nombre) {
    if (amigos.includes(nombre)) {
        return "Tengo un amigo que se llama " + nombre;
    } else {
        return "Sería bueno tener un amigo que se llame " + nombre;
    }
}

console.log(verificarAmigo("Maxi"));