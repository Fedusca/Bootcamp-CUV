//Declaracion, incluimos modulos, paquetes, etc
const express  = require("express");
let app = express();
const PORT = 3000;
let mongoose = require("mongoose");


//Conexion con la base de datos de Mongo
mongoose.connect("mongodb+srv://fedusca:del1al9@cluster0.blldddk.mongodb.net/CUV_Curso?retryWrites=true&w=majority&appName=Cluster0")
.then(function(db){
    //Que sucede si la conexion sale bien
    console.log("....Conectado a MongoDB")
})
.catch(function(err){
    // Que sucede si la conexion sale mal
    console.log(err)
})


//Importamos el modelo de datos
let clientes_bd = require("./models/Clientes");


//Rutas o end-points
// Method URL
// [GET] https://localhost:3000/clientes
app.get('/clientes',async function(req,res){
//Todo lo que quiera hacer
// Vamos a obtener los familiares(coleccion de nuestra base de datos)
    let documentos = await clientes_bd.find();
    console.log(documentos);


 res.send("Hola");
})


//Listen
app.listen(PORT, function(){
    console.log("*******************************")
    console.log("Servidor iniciado en puerto 3000")
    console.log("*******************************")
})