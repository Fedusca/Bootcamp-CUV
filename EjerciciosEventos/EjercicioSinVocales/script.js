// Ejercicio

// - En un input permitir que el usario ingrese cualquier letra menos las vocales.
// - Para esto, en mostrar el texto ingresado (letra por letra) exceptuando las vocales.
// - Ej: texto ingresado: Hola Mundo
//       texto a mostrar en un h2 = H_l_ M_nd_

let inputTexto = document.getElementById("inputTexto");
let resultado = document.getElementById("resultado");

inputTexto.addEventListener("input", () => {
    let textoIngresado = inputTexto.value;
    let textoFiltrado = filtrarVocales(textoIngresado);
    resultado.textContent = textoFiltrado; 
});

function filtrarVocales(texto) {
    const vocales = ["a", "e", "i", "o", "u"];
    let textoFiltrado = "";

    for (let i = 0; i < texto.length; i++) {
        const letra = texto[i].toLowerCase();
        if (!vocales.includes(letra)) {
            textoFiltrado += texto[i];
        } else {
            textoFiltrado += "_";
        }
    }

    return textoFiltrado;
}
