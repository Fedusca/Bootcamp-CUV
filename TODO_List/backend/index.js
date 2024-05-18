// proyecto: TODO List (gestor de tareas)

// - crear una tarea (titulo, descripcion, terminada = TRUE/FALSE) [POST]
// - ver todas las tareas [GET]
// - modificar una tarea [PUT]
// - eliminar una tarea [DELETE]

// FRONTEND                  ---->         BACKEND
//                           <----   
// HTML, CSS, JS                      Rutas o endpoints (método + URL)
// inputs, estilos, eventos           Conexión con la BD

const express = require("express");
const app = express();
const PORT = 3000;
const cors = require("cors"); //Incluimos el paquete CORS
const bodyParser = require("body-parser");

//Utilizar paquete CORS

app.use(cors());

//Confirguramos el body-parser

app.use(bodyParser.urlencoded({extended: true}));


//Incluir conexion base de datos
let conexionBD = require("./conexion");


//Incluir archivos de estructura
let tareas = require("./models/tareas");

//Rutas

/* -----Create ------*/
app.post("/tarea",async function(req, res){
// let datos = {
//     titulo: "Hacer proyecto final de Bootcamp",
//     descripcion: "aca va la descripcion de la tarea...",
//     finalizada: false
// }
let datos = req.body


let nuevoDoc = new tareas(datos);
await nuevoDoc.save();
res.send("Tarea creada correctamente");
});


/* -----Read ------*/
app.get("/tareas",async function(req, res){
    let documentos = await tareas.find();
    console.log(documentos);
    res.send(documentos);
});
/* -----Update ------*/
app.put("/tarea/:id_tarea", function(req, res){

});
/* -----Delete ------*/
app.delete("/tarea/:id_tarea", function(req, res){

});




app.listen(PORT, () =>{
    console.log("[  SERVIDOR INICIADO " + PORT + "]");
});
