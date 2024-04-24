 let num0 = document.getElementById("0");
 let num1 = document.getElementById("1");
 let num2 = document.getElementById("2");
 let num3 = document.getElementById("3");
 let num4 = document.getElementById("4");
 let num5 = document.getElementById("5");
 let num6 = document.getElementById("6");
 let num7 = document.getElementById("7");
 let num8 = document.getElementById("8");
 let num9 = document.getElementById("9");
//  let btnSuma = document.getElementById("+");
//  let btnResta = document.getElementById("-");
//  let btnMulti = document.getElementById("*");
//  let btnDiv = document.getElementById("/");
//  let btnDel = document.getElementById("del");
//  let btnClear = document.getElementById("c");
//  let display = document.getElementById("display");
//  let btnDot = document.getElementById(".");



// document.getElementById('.').addEventListener('click', () => {
//     const valor = ".";
//     document.getElementById('display').value += valor;
// });

//   document.getElementById('0').addEventListener('click', () => {
//     const valor = '0'; 
//     document.getElementById('display').value += valor;
// });
// document.getElementById('1').addEventListener('click', () => {
//     const valor = '1'; 
//     document.getElementById('display').value += valor;
// });
// document.getElementById('2').addEventListener('click', () => {
//     const valor = '2'; 
//     document.getElementById('display').value += valor;
// });
// document.getElementById('3').addEventListener('click', () => {
//     const valor = '3'; 
//     document.getElementById('display').value += valor;
// });
// document.getElementById('4').addEventListener('click', () => {
//     const valor = '4'; 
//     document.getElementById('display').value += valor;
// });
// document.getElementById('5').addEventListener('click', () => {
//     const valor = '5'; 
//     document.getElementById('display').value += valor;
// });
// document.getElementById('6').addEventListener('click', () => {
//     const valor = '6'; 
//     document.getElementById('display').value += valor;
// });
// document.getElementById('7').addEventListener('click', () => {
//     const valor = '7'; 
//     document.getElementById('display').value += valor;
// });
// document.getElementById('8').addEventListener('click', () => {
//     const valor = '8'; 
//     document.getElementById('display').value += valor;
// });

// document.getElementById('9').addEventListener('click', () => {
//     const valor = '9'; 
//     document.getElementById('display').value += valor;
// });
// document.getElementById('+').addEventListener('click', () => {
//     const valor = '+'; 
//     document.getElementById(btnSuma).value += valor;
// });
// document.getElementById('-').addEventListener('click', () => {
//     const valor = '-'; 
//     document.getElementById('display').value += valor;
// });
// document.getElementById('*').addEventListener('click', () => {
//     const valor = '*'; 
//     document.getElementById('display').value += valor;
// });
// document.getElementById('/').addEventListener('click', () => {
//     const valor = '/'; 
//     document.getElementById('display').value += valor;
// });
// document.getElementById('=').addEventListener('click', () => {
//     const valor = '='; 
//     document.getElementById('display').value += valor;
// });
// document.getElementById('del').addEventListener('click', () => {
//     const display = document.getElementById('display');
//     display.value = display.value.slice(0, -1); 
// });
// document.getElementById('c').addEventListener('click', () => {
//     document.getElementById('display').value = ''; 
// });

// btnSuma.addEventListener("click", function(){
//     calcularResultado('+');
// });

// btnResta.addEventListener("click", function(){
//     calcularResultado('-');
// });

// btnMulti.addEventListener("click", function(){
//     calcularResultado('*');
// });

// btnDiv.addEventListener("click", function(){
//     calcularResultado('/');
// });

// btnEqual.addEventListener("click", function(){
//     calcularResultado('=');
// });


// btnSuma.addEventListener("click", function(){
//     const expresion = document.getElementById('display').value;
//     const numeroIngresado = expresion.match(/(\d+)\+(\d+)/);
    
//     if (numeroIngresado) {
//         const numIngresado1 = parseFloat(numeroIngresado[0]);
//         const numIngresado2 = parseFloat(numeroIngresado[1]);
        
//         const resultado = numIngresado1 + numIngresado2;
        
//         document.getElementById('display').value = resultado;
//     } else {
//         alert("Formato de entrada incorrecto");
//     }
// });

// btnResta.addEventListener("click", function(){
//     const expresion = document.getElementById('display').value;
//     const numeroIngresado = expresion.match(/(\d+)\-(\d+)/);
    
//     if (numeroIngresado) {
//         const numIngresado1 = parseFloat(numeroIngresado[0]);
//         const numIngresado2 = parseFloat(numeroIngresado[1]);
        
//         const resultado = numIngresado1 - numIngresado2;
        
//         document.getElementById('display').value = resultado;
//     } else {
//         alert("Formato de entrada incorrecto");
//     }
// });

// btnMulti.addEventListener("click", function(){
//     const expresion = document.getElementById('display').value;
//     const numeroIngresado = expresion.match(/(\d+)\*(\d+)/);
    
//     if (numeroIngresado) {
//         const numIngresado1 = parseFloat(numeroIngresado[0]);
//         const numIngresado2 = parseFloat(numeroIngresado[1]);
        
//         const resultado = numIngresado1 * numIngresado2;
        
//         document.getElementById('display').value = resultado;
//     } else {
//         alert("Formato de entrada incorrecto");
//     }
// });

// btnDiv.addEventListener("click", function(){
//     const expresion = document.getElementById('display').value;
//     const numeroIngresado = expresion.match(/(\d+)\/(\d+)/);
    
//     if (numeroIngresado) {
//         const numIngresado1 = parseFloat(numeroIngresado[0]);
//         const numIngresado2 = parseFloat(numeroIngresado[1]);
        
//         const resultado = numIngresado1 / numIngresado2;
        
//         document.getElementById('display').value = resultado;
//     } else {
//         alert("Formato de entrada incorrecto");
//     }
// });

// btnEqual.addEventListener("click", function(){
//     const expresion = document.getElementById('display').value;
//     const numeroIngresado = expresion.match(/(\d+)([\+\-\*\/])(\d+)/);
    
//     if (numeroIngresado) {
//         const numIngresado1 = parseFloat(numeroIngresado[0]);
//         const operador = numeroIngresado[1];
//         const numIngresado2 = parseFloat(numeroIngresado[2]);
        
//         let resultado;
//         switch (operador) {
//             case '+':
//                 resultado = numIngresado1 + numIngresado2;
//                 break;
//             case '-':
//                 resultado = numIngresado1 - numIngresado2;
//                 break;
//             case '*':
//                 resultado = numIngresado1 * numIngresado2;
//                 break;
//             case '/':
//                 resultado = numIngresado1 / numIngresado2;
//                 break;
//             default:
//                 alert("Operador no válido");
//         }
        
//         document.getElementById('display').value = resultado;
//     } else {
//         alert("Formato de entrada incorrecto");
//     }
// });

// function tomarValor(btnSuma) {
//     let valor1 = document.getElementByID.parseFloat(('display')).value;
//     let operacion = btnSuma;
//     document.getElementByID('display').value="";
//   }
  
//   function igual() {
//     let valor2 = document.getElementByID.parseFloat(('display')).value;
//   let resultado = 0;
//     switch(operacion){
//       case "+": resultado = valor + valor2;
//       case "-": resultado = valor - valor2;
//       case "/": resultado = valor / valor2;
//     }
//     document.getElementById('display').value = resultado;
//   }

const display = document.getElementById("display");
const btnDot = document.getElementById(".");
const btnClear = document.getElementById("c");
const btnDel = document.getElementById("del");
const btnSuma = document.getElementById("+");
const btnResta = document.getElementById("-");
const btnMulti = document.getElementById("*");
const btnDiv = document.getElementById("/");
const btnEqual = document.getElementById("=");

function agregarNumero(valor) {
    display.value += valor;
}

btnDot.addEventListener('click', () => {
    agregarNumero(".");
});

for (let i = 0; i <= 9; i++) {
    document.getElementById(i.toString()).addEventListener('click', () => {
        agregarNumero(i.toString());
    });
}

btnClear.addEventListener('click', () => {
    display.value = '';
});

btnDel.addEventListener('click', () => {
    display.value = display.value.slice(0, -1);
});

function calcularResultado() {
    const expresion = display.value;
    let resultado;
    try {
        resultado = eval(expresion); 
        if (isNaN(resultado) || !isFinite(resultado)) {
            throw new Error("Invalido");
        }
        display.value = resultado;
    } catch (error) {
        display.value = error.message;
    }
}

btnSuma.addEventListener("click", () => {
    agregarNumero("+");
});
btnResta.addEventListener("click", () => {
    agregarNumero("-");
});
btnMulti.addEventListener("click", () => {
    agregarNumero("*");
});
btnDiv.addEventListener("click", () => {
    agregarNumero("/");
});
btnEqual.addEventListener("click", () => {
    calcularResultado();
});