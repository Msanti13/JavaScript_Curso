//FUNCIONES
//Las funciones son un bloque de código que se ejecuta cuando se invoca, es decir, cuando se llama a la función.
function myFunction() {
    console.log("Hola Mundo!");
}   
myFunction(); //Hola Mundo!

function suma(a, b) {
    return a + b;
}
console.log(suma(5, 10)); //15

//asignar una función a una variable
var var3 = suma;
console.log(var3(10, 20)); //30


//Funciones anidadas
function resta(a, b) {
    function resta1() {
        return a - b;
    }
    return resta1();
}

console.log(resta(10, 5)); //5

//otro ejemplo

