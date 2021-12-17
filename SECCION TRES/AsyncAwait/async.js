//manera clasica

const { error } = require("console")

async function QuienEsEsePokemon(){

}

let QuienEsEsePokemon = async () =>{

}

//try/catch manejo de errores

try{

    let pokemon = await QuienEsEsePokemon ()
    console.log(`El porkemon es  ${pokemon.name}`);
}catch(err){

console.error(error);

}


//then/catch para manejo de errores

await QuienEsEsePokemon()
.then()
.catch()
return;