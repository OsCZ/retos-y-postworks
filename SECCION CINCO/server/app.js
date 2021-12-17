const express = require('express');
const app = express();

const APP_PORT = 3001;

//dumy data

//const notes = [{
//id: 1,
//title: 'dummy note',
//content:'This is dummy note',
//}];


//crear la primera ruta

//app.get('/',(req, res)=>{

//return res.send('<h1>Welcome to express</h1>')
//});

//crear segunda ruta

//app.get('/api/notes',(req, res) => {

   // res.json(notes)
   
 //});

 //getting routes definitions 
 
 app.use('/api',require('./routes'))


app.listen(APP_PORT, () =>{

console.log(`Express on port ${APP_PORT}`)

});



