function holamundo(){
// todo

}



holamundo()


function suma(a,b){ // paso 2
var c = a + b; //paso 3
return c // paso 4

}

suma(2,3) // 1 y entry point paso 5 y output


function resta(a,b,callback){
callback('Hola soy el callback');
var c = a - b;
return c

}


//console.log(resta(4,5,function(g){
   //console.log(g)
 //}))



function primero(){
console.log('soy el primero');
}

function segundo(){
console.log('soy el segundo');
}

function tercero(){
console.log('soy el tercero');        
}

//primero();
//segundo();
//tercero();

//----------------------------------------

    function primerocb(){
    setTimeout(function(){
    console.log('soy el primero cb');
    },5000)
    
    }
    
    function segundocb(){
    setTimeout(function(){
    console.log('soy el segundo cb');
    },6000)
    
    }
    
    function tercerocb(){
    setTimeout(function(){
    console.log('soy el tercero cb');  
    },7000)
       
    }    

    primerocb();
    segundocb();
    tercerocb();


    setTimeout(function () {
        console.log("Soy el 1");
        setTimeout(function () {
          console.log("Soy el 2");
          setTimeout(function () {
            console.log("Soy el 3");
            setTimeout(function () {
              console.log("Soy el 4");
              // Podría a ver más llamadas asíncronas
            }, 4000);
          }, 3000);
        }, 2000);
      }, 1000);
      