var  os  = require('os');

var misCpus = os.cpus();

console.log(misCpus);

//Sintaxis para traer nuestros modulos a una archivos

var VARIABLE_DONDE_SE_GUARDA = require('NOMBRE_DEL_MODULO_INTERNO');
var VARIABLE_DONDE_SE_GUARDA = require('NOMBRE_DEL_MODULO_DE_TERCERO');
var VARIABLE_DONDE_SE_GUARDA = require('../CARPETA/NOMBRE_DEL_MODULO_CREADO');