const fs = require('fs')

function readFile(path){
return new Promise((resolve, reject) =>{
fs.readFile(path,'utf-8',(error,data) =>{
if (error) return reject(error)
   return resolve(data)

    })
  })
}
 readFile('./archivo.txt')
.then((data) => console.log(data))
.catch((error) => console.error(error))


//Una promesa sólo puede completarse con éxito o fallar una vez.
//Pendiente, Resulta y Rechazada
//Importante: Las promesas tienen la particularidad de que se pueden encadenar then,
//siendo el resultado de una promesa, los datos de entrada de otra posible función, además, 
//tienen un mecanismo para el manejo de errores catch


let promesa = new Promise((resolve, reject) =>{
setTimeout(() =>{
let numero= Math.random();
if(numero>= 0.5) resolve('Exitoso');
reject('Error');
  
},2000)

})

promesa.then((data) => console.log(data)).catch((data) => console.log(data));
console.log('inicio');

// Primera capa a la hora de hacer mis sistemas (funciones) etc == Estructura
// Segunda capa Elmentos/parametros/seudoVariables para misdatos
// tercera capa logica de mi linea de ejecu y mi llamada de funcion
// Cuarta capa majeno de errores