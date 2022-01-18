//repeticiones con if

/*let n = [1,4,3,16,"pepino",20,7,8,1999,true];
x=0;


while (x <= n.length-1)
{
 console.log(n[x]);
 x = x+1;
}*/


///FUNCIONS ABREUJADES



let suma1 = (a,b) => a + b; // funcio abreujada




//FOR EACH

let a = [4,0,2,1,2]

//a.forEach((x)=> console.log(x*2)); // retorna els valors en llista del array *2
//console.log(a.map((n)=> n*2)); // .map retorna el array complet ambe els valors *2
//console.log(a.filter((n) => n===1)); // et filtra tots els valors === 1

//console.log(a.reduce((b,c)=> b+c)); // suma de valors
//console.log(a.reduce(suma1,0)); // SUMA de valors utilitzan una funció que ja et fa la suma (0 es element neutre )acumulador)

//console.log(a.some((n)=> n>2)); // si hi ha un valor mes gran de 2 en el array = TRUE sino fals
//console.log(a.every((n)=> n>=1)); // si tots el valors del array son mes grans o = a 1 == TRUE, sino fals
//console.log(a.find((n)=> n>1)); // et retorna el primer valor del array que es > 1
//console.log(a.findIndex((n)=> n>1)) // et lindex del primer numero que sigui > 1 ( aqui index[0])


const readlineSync = require("readline-sync");

//let nom = readlineSync.question("Com et dius?");
//console.log('Hola '+ nom + '!')
let boolea= true;

function Introduccion(){
    console.log("INICIO DE A HISTORIA");
    Seguir();
}
function Seguir(){
  
    let continuar = readlineSync.question("Quieres continuar la historia?");
    if(continuar === "si"){
        console.log(continuar + '!!!!!! ADELANTE') ;
        Continuar();

    }
    else if(continuar === "no"){
        console.log(continuar + '!!!!!! ADEUUUU') ;
        Acabar();
         boolea === false;

    }else{
       Acabar();
    }
    
};

function Acabar (){
console.log("FIN DE LA HISTORIA");
}
function Continuar(){
    console.log("la historia continua....");
    Acabar();
}

if (boolea === true)Introduccion();
