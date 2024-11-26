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

//metodo find
var arr2 = [10, 8, 33, 40, 51];
var result1 = arr2.find((val) => val > 30);
console.log(result1); //33

//metodo map
var arr3 = [10, 20, 30, 40, 50];
var result2 = arr3.map((val) => val * 2);
console.log("metodo map");
console.log("Metodo original:", arr3)
console.log("Metodo con map: ", result2); //[ 20, 40, 60, 80, 100 ]

//metodo reduce

var arr4 = [100, 200, 300, 400, 500];
var result3 = arr4.reduce((acc, val) => acc + val);
console.log("metodo reduce:" , result3); //1500
console.log("Metodo original:", arr4)


//task
/*crear una función que primero genere un tablero (arreglo bidimensional)
 y luego rellene ese tablero con valores usando un array de piezas, 
 donde cada pieza es un objeto con coordenadas de tablero y el valor de la pieza dentro del tablero*/
var generate = function (length, width, pieces) {
    var board = [];
    for (var i = 0; i < length; i++) {
        board[i] = [];
        for (var j = 0; j < width; j++) {
            board[i][j] = null;
        }
    }
    pieces.forEach(function (piece) {
        board[piece.x][piece.y] = piece.value;
    });
    return board;
}
  
