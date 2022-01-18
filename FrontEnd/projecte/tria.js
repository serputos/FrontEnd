const readlineSync = require("readline-sync");


let continuar = null;
let a = null;

//let nom = readlineSync.question("Com et dius?");
//console.log('Hola '+ nom + '!')
const historia =[{
text:"FUNCIONA????", //0
si:8,
no:1},{
text:"LO HAS TOCADO ??!",//1
si:3,
no:4,
},{
text:"SIN PROBLEMA",//2
fi: true
},{
text:"BURRROO! LO SABE AGUIEN ??",//3
si:5,
no:6,
},{
text:"NOS DARA PROBLEMAS ??",//4
si:5,
no:7,
},{
text:"LA HAS CAGADO! PUEDES CULPAR A ALGUIEN? ",//5
si:2,
no:5,
},{
text:"ESCONDELOO ",//6
go:2,
},{
text:"LANZALOOO ",//7
go:2,
},{
 text:"NO TOQUES ",//8
 go:2,
}];

let numPagina = 0;
let pagina = historia[numPagina];

while (numPagina>= 0){

llegeixPagina();
nextPage();

if(numPagina === 2) console.log("HISTORIA ACABADA");

}

//console.log("HISTORIA ACABADA");



function boolea (a){

    continuar = readlineSync.question();


    if(continuar === "si" || continuar === "SI"){
       
        return a = true;
        

    }
    else if(continuar === "NO" || continuar === "no"){
        
        return a =  false;
       
    }
}

function llegeixPagina(){

pagina = historia[numPagina];
console.log(pagina.text);

}
function nextPage(){
    if (pagina.go) numPagina = pagina.go;
//continuar = readlineSync.question();

else if (boolea(a)){
    numPagina = pagina.si;
}else{
    numPagina = pagina.no;
}
    
}


/*
function Funciona(){
  
    console.log("FUNCIONAAAA?");
    let s = boolea(a);
    if(s){
        todOK();

    }
    else if(s === false){
        console.log("LO HAS TOCADO????") ;
        Tocado();
        
    }
    
};

function todOK (){
    console.log("SIN PROBLEMA!!!!!") ;

}
function Tocado(){

    //continuar = readlineSync.question();
    s = boolea(a);
    if(s){
       
        console.log ("BURROOOOOO");
        loSaben();

    }
    else if(s===false){
        console.log("NOS DARA PROBLEMAS???");
        daraProblemas();
        
    }
    
}

function daraProblemas(){

   // continuar = readlineSync.question();
    s = boolea(a);
    if(s){
       
        laHasCagado();

    }
    else if(s === false){
        console.log("LANZALOO");
        todOK();
    }
    

}

function loSaben(){
   console.log("LO SABE ALGUIEN?");
    s = boolea(a);
    if(s){
       
        laHasCagado();

    }
    else if(s === false){
        console.log("ESCONDELOO");
        todOK();
    }

}

function laHasCagado(){
    console.log("LA HAS CAGADO!!!!!");
    culparOtro();

}

function culparOtro(){
  console.log("PUEDES CULPAR A OTRO??");

     s = boolea(a); 
    if(s){
       
      todOK();

    }
    else if(s === false){
     laHasCagado();
    }

}
if (inicio === true)Funciona();*/
