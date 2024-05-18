const express = require("express");
let app = express();
const PUERTO = 3000;
const mongoose = require("mongoose");


//incluimos el modelo de los datos que vamos a utilizar
const Gastos = require("./models/gastos")

//Conectamos con la base de datos
mongoose.connect("mongodb+srv://fedusca:del1al9@cluster0.blldddk.mongodb.net/CUV_Curso?retryWrites=true&w=majority&appName=Cluster0")
.then(function(db){
    //Que sucede si la conexion sale bien
    console.log("....Conectado a MongoDB")
})
.catch(function(err){
    // Que sucede si la conexion sale mal
    console.log(err)
})




//Rutas o end-points

//ver Gastos
app.get("/operaciones", async function(req,res){
    let documentos = await Gastos.find({});
    console.log(documentos);
    res.send(documentos); 
});
//Guardar o crear nuevo Gasto
app.post("/operacion",async function(req,res){
    //Guarde en la Base de Datos los datos de la operacion
    //concepto, monto, tipo y fecha
    let datos_ejemplo = {
        concepto: "Prueba",
        monto: 12000,
        tipo: "Ingreso",
        fecha: "15.05.2024"
    }

    let nueva_op = new Gastos(datos_ejemplo); //Arma el documento a insertar
    await nueva_op.save(); //lo inserta
    res.send("Operacion creada correctamente"); //respuesta al cliente
});
//Modificar o  un gasto
app.put("/operacion/", function(req,res){

});
//Eliminar un gasto
app.delete("/operacion/:id",async function(req,res){
    //obtener el id que quiero eliminar
    let id_operacion = req.params.id;
    //Buscarlo en la base de datos y eliminarlo
    await Gastos.findByIdAndDelete(id_operacion);
    res.send("Operacion ELIMINADA correctamente");
});





//inicio servidor en puerto 3000
app.listen(PUERTO,()=>{
    console.log("Servidor iniciado...")
})