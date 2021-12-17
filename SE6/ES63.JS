// Destructuring -  array

const  colors = ['blue','red','yellow'];

const [blue, red, yellow] = colors;

console.log(blue);
console.log(red);
console.log(yellow);


// Destructuring -  Objeto

const persona ={
nombre:'Juan',
apellido:'Lopez',
ciudad:'Panama'
};

// sin  Destructuring

//const nombre = persona.nombre;
//const apellido = persona.apellido;


// con Destructuring 

const {nombre,apellido} = persona; 

console.log(nombre,apellido);
