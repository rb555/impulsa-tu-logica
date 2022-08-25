
function saltarLinea(){
    document.write("<br>");
}

function imprimirMensaje(mensaje){
    document.write(mensaje);
    saltarLinea();
}


var num1;
var num2;

numeroUno = parseInt(prompt("Escribe el primer número"));
numeroDos = parseInt(prompt("Escribe el segundo número"));
function multiplicar(numeroUno,numeroDos){
    
    imprimirMensaje("El resultado de la multiplicación de los dos números es: " + (numeroUno*numeroDos));
}
multiplicar(numeroUno,numeroDos);
