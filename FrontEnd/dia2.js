//let a = {x:1, y:2}
//let b = 'y'; 
//console.log(a[b]); ---- 2


//console.log(a === a); TRUE

//console.log([1,2,3] === [1,2,3]); FALSE   ( pq son llistes diferents)

/*

let arr = "hola";
let ia = '1';

console.log(arr[ia]);*/

/*
function laMevaFuncio(a,b){
   return a + b;

}
let n = laMevaFuncio (1,2,);
console.log(laMevaFuncio(1,2));*/
/*let a = [1, 2 ,3];
//a.unshift('p');

console.log('pop',a.pop());
console.log(a);*/
let x= 3;

function esTres(n){
   if(n>=3){
      return true;
   }
   return false;
   
}
function esPar(n){
   if(n % x == 0){
      return true;
   }
   return false;
   
}

//CALCULA SI UN AÑO ES BISIEST O NO
function añoTraspas(n){ 
   if( n%4===0 && n%100!=0){
        
      return true;
      
   }else if(n%400 === 0 && n%100 ===0){
      return true;
   }else{
      return false;
   } 
   
   }
    console.log(añoTraspas(1992,),"1992 es traspas");
    console.log(añoTraspas(2000,),"2000 es traspas");
    console.log(añoTraspas(1993),"1993 NO es traspas");
    console.log(añoTraspas(1900),"1992 NO es traspas");

   



