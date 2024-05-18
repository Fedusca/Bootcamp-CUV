
let mongoose = require("mongoose")
let Schema = mongoose.Schema;


let gastos = new Schema({
    concepto: String, //viaje
    monto: Number, //1450,44
    tipo : String, // gasto o ingreso
    fecha: String, // 15.05.2024
    
});


module.exports = mongoose.model("gastos", gastos)