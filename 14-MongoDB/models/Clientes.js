// Crear como un molde de los datos y tipos de datos que tiene coleccion familia



let mongoose = require("mongoose")
let Schema = mongoose.Schema;

//crear un esquema con estructura de datos que tienen/tendran los documentos de esta coleccion

let clientes = new Schema({
    nombre: String,
    apellido: String,
    email: String,
    genero: String,
    idioma: String,
    titulo: String,
    talle: String,
    edad: Number,
    fec_nac: String,
});

//Exportar el modulo que acabamos de crear

module.exports = mongoose.model("clientes", clientes)