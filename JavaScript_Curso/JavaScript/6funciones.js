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

//FUNCIONES FLECHA
//Las funciones de flecha son una forma más corta de escribir funciones.
var myFunction1 = () => {
    console.log("Hola Mundo js!");
}
myFunction1(); //Hola Mundo js! 


var suma1 = (a, b) => a + b;
console.log("La suma es ", suma1(5, 10)); //15

var funcc = () => console.log("Funcion sin argumentos!");
funcc(); //Funcion sin argumentos!

//Funcion de flecha devolviendo un objeto
var objeto = () => ({ nombre: "Juan", edad: 25 });
console.log(objeto()); //{ nombre: 'Juan', edad: 25 }

//funcion como argumento
function saludar() {
    return "Hola";
}

function saludar1(funcion) {
    return funcion();
}

console.log(saludar1(saludar)); //Hola

//Funciones de flecha como argumento
var saludar2 = () => "Hola";
var saludar3 = (funcion) => funcion();
console.log(saludar3(saludar2)); //Hola


//funcion como objeto de retorno
function objeto1() {
    return function() {
        return "Hola desde un objeto";
    }
}
var fun = objeto1();
console.log(fun()); //Hola

//Funciones de flecha como objeto de retorno
var objeto2 = () => () => "Hola desde un objeto2";
var fun1 = objeto2();
console.log(fun1()); //Hola desde un objeto

//metodos de funciones con forEach
var numeros = [1, 2, 3, 4, 5];
numeros.forEach(function(numero) {
    console.log(numero);
  
});

console.log("Fin del programa");

//otro ejemplo
var arr = [10, 8, 33, 40, 51];
arr.forEach((val, index, array) => {
    console.log(val, index, array);
});

//metodo filter
var filt = [10, 20, 30, 40, 50];
var res2 = filt.filter(a => a > 30);
console.log(filt); //[ 40, 50 ]
console.log(res2); //[ 40, 50 ] 





var arr1 = [10, 8, 33, 40, 51];
var result = arr1.filter((val) => val > 30);
console.log(result); //[ 33, 40, 51 ]
