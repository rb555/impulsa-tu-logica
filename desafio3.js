function saltarLinea(){
    document.write("<br>");
    document.write("<br>");
    document.write("<br>");
}

function imprimirFrase(frase){
    document.write(frase);
    saltarLinea();
}

var par = 1;

while(par<= 100){
   if (Math.round(par/2)==(par/2)){
    imprimirFrase(par);
   } 
   par = par + 1;
}
imprimirFrase ('FIN');