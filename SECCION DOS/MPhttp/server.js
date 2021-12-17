//http  protocolo de transferencia de hiper-texto

// http
// https

var http = require('http')

//crear el servidor

var server = http.createServer( function(peticion, respuesta){

respuesta.end(`<h1>Hola Mundo desde el servidor..</h1>`)

})

server.listen( 3000,function(){

console.log('Servidor escuchando en el metodo'+' '+ this.address().port)


})