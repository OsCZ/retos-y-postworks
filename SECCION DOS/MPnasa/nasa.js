const https = require('https')


function getAPOD() {
  
  https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
  let data = ''

resp.setEncoding('utf-8')
  
//trozos de informacion recibida
 
resp.on('data', (chunk )=> {

    data += chunk
    //console.log(data)

});

//la respuesta completa ha sido recibida. imprime el resultado 

resp.on('end',() =>{
let body = JSON.parse(data)
console.log('Titulo',body.title)
console.log('\nFecha',body.date)
console.log('\nExplicacion',body.explanation)
console.log('\nURL',body.url)
})

  })
    

}

getAPOD()