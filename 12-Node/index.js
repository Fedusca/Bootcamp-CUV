// 1) Crear proyecto : npm init   
// 1.1) nombre, version, archivo principal 
// 2) Crear archivo index.js (archivo principal)
// 3) instalar paquete de Nodemon (server live): npm install nodemon
// 4) Ejecutar servidor: npx nodemon index.js


//Crear un servidor HTTP
// [METODO] [URL]
// GET http://localhost:80/listadoClientes ------> Devolve un texto
// POST  http://localhost:80/formulario ---------> Guardar en base de datos lo que envia el cliente


//Creando un servidor web usando NODE PURO 
//Incluimos librerias / modulos que necesitamos
// const http = require("http");
// const fs = require("fs");

// creamos un objeto 
// http.createServer(function (req, res){
 
//  // Creando la cabecera de la respuesta que va a dar el servidor
//     res.writeHead(200,{
//     "Content-type" : "text/html",
//     "Access-Control-Allow-Origin" : "*"
//  });
//  // tomamos el archivo index.html utilizando el modulo "fs"
//  let archivoHtml = fs.createReadStream(__dirname + '/index.html');

//  //Enviamos el archivo como parte de la respuesta/ response
//  archivoHtml.pipe(res);

 

// }).listen(3000); // el servidor escucha el puerto 3000 (http://localhost:3000)

// console.log("Estamos visitando el sitio http://localhost:3000");


// Creando un servidor web usando EXPRESS    

// Instanciamos o incluimos los paquetes / modulos necesarios
const express = require("express");
const app = express();

// Aca especificamos la ruta y el motodo de la peticion del cliente

// GET http://localhost:3000/inicio

app.get('/inicio', function(req, res){
    // Enviamos el archivo
    res.sendFile(__dirname + "/index.html")
});


// Si el usuario quiere agregar algun parametro
app.get("/saludo/:nombre", function(req, res){
    
    let name = req.params.nombre; // Capturo el parametro nombre enviado por URL
    
    console.log("nombre enviado por URL: " + name);
    res.send("hola "+ name); // Respuesta del servidor
});
// Action del form = "http://localhost:3000/formulario"
app.get("/formulario", function(req, res){

})
// Escuchar el puerto 3000

app.listen(3000);

// app.get('/contactenos', function(req, res){
//     // Otra cosa
// });

app.get("/nombre/:a/:b", function (req, res) {
    let param_a = req.params.a;
    let param_b = req.params.b;
  
    res.send(param_a + " - " + param_b);
  });

  app.get("/detalle/:album", function (req, res) {
    let disco = req.params.album;
    if (parseInt(disco) > 5) {
      res.status(404).send("<h3>No se encuentra el Album</h3>");
    } else {
      res.send("<h2>Viendo el detalle del Album #" + disco + "</h2>");
    }
  });


  //si el cliente ingresa por [GET] http://google.com ---> servidor me de una respuesta
// peticion/request (cliente) ----> respuesta/response (servidor)

//end points (rutas) ---> necesito el metodo y url

// [GET] http://localhost:4000/hola
app.get("/hola", function (req, res) {
    res.send("Holaaa"); //enviamos la respuesta
  });

  //Ejercicio: Crear una ruta que reciba 2 parametros y sean gustos de helados
// Como respuesta el servidor debera mostrar "Mi helado favorito es de XXXXX y XXXXXX"


//contraseña MONGO : del1al9