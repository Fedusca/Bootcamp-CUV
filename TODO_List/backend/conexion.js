// Incluir el paquete que maneja la BD

const mongoose = require("mongoose");

let baseDatos = mongoose
.connect("mongodb+srv://fedusca:del1al9@cluster0.blldddk.mongodb.net/TODO_List?retryWrites=true&w=majority&appName=Cluster0")
.then(function(db){
    //Que sucede si la conexion sale bien
    console.log("....Conectado a MongoDB.....")
})
.catch(function(err){
    // Que sucede si la conexion sale mal
    console.log(err)
})


module.exports = baseDatos;