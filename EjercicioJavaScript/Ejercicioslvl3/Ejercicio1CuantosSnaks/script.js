let edad = 29;
let edadMax = 80;
let snack = "doritos";
let diario = 1;
let diasRestantes = (edadMax - edad) *365;
let totalSnaks = diasRestantes * diario;

alert(`Necesitaras ${totalSnaks} paquetes de  ${snack} para que te alcancen hasta los ${edadMax}`);

let precio = 3000
let costoTotal = totalSnaks * precio;

alert(`Vas a gastar $${costoTotal} en ${snack} hasta los ${edadMax}`)