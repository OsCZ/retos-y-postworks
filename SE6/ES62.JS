
//Strings en ES6


//ES5
const nombre = "Oscar";

//console.log("Buenos dias " + nombre );



//ES6
const nombre2 = "Juan";

//console.log(`Welcome ${nombre2}`);


//multiple linea

const msj = `Welcome!
Oscar
shany
marvin
todos
`;

//console.log(msj);

// expresiones matematicas

const a =  2;
const b =  5;

//console.log(`La suma de a  +  b =  ${a + b}`)


//arreglos 

//const  colors = ['blue','red','yellow'];

//console.log(`Primary Colors: ${colors.join(', ')}`)





//-----------------------Objeto---------------------------------

const Libro = {
Autor:'Martin',
titulo:'Libro 200',
Año:'2012'
}
  

const copiarLibro1 = Libro;//atraparlo en variable
const copiarLibro2 = {...Libro,Año:2021}

console.log(Libro)
console.log(copiarLibro1)
console.log(copiarLibro2)


//-----------------------persona---------------------------------

const persona = {
    Nombre:'Oscar',
    Apellido:'Lopez'
 
    };

const copiarpersona = persona; 
const CopiarpersonaSpread = {...persona}


console.log(persona);
console.log(CopiarpersonaSpread);

persona.Nombre = 'Martin'

console.log(persona);
console.log(copiarpersona);
console.log(CopiarpersonaSpread);



//-----------------------array---------------------------------

const colors = ['blue','red','yellow'];

const CopiarColors = colors; 
const CopiadeColorsWithSpread = [...colors]

console.log(colors);
console.log(CopiarColors);

colors[0] = 'White'

console.log(colors);
console.log(CopiarColors);
console.log(CopiadeColorsWithSpread);



// funciones de alto orden

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(`odd  numbers: ${
numbers.filter(function(n){
return  n % 2 != 0
})
}`);