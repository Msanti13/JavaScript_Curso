//PROGRAMACION FUNCIONAL EN JS
//funciones de curried

//Una función curried es una función que toma múltiples argumentos uno a la vez.
//Cada vez que se llama a una función curried con un argumento, devuelve una nueva función que espera el siguiente argumento.

//Ejemplo de función curried
function suma(a) {
    return function (b) {
        return a + b;
    }
}
console.log(suma(5)(10)); //15


//Ejemplo de función curried con dos funciones
function suma1(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}
console.log(suma1(5)(10)(15)); //30


//composicion de funciones
//La composición de funciones es una técnica de programación funcional que combina dos o más funciones para producir una nueva función.
//Ejemplo de composición de funciones
function doble(x) { //funcion que duplica el valor de x
    return x * 2;
}

function triple(x) {
    return x * 3; //funcion que triplica el valor de x
}

function composicion(f, g) { //funcion que recibe dos funciones
    return function (x) { //retorna una nueva funcion que recibe un argumento
        return f(g(x)); //retorna la composicion de las dos funciones
    }
}

var dobleTriple = composicion(doble, triple); //composicion de las dos funciones
console.log("composicion de funciones:", dobleTriple(5)); //30

//Ejemplo de composición de funciones con funciones de flecha
var doble1 = x => x * 2;
var triple1 = x => x * 3;

var composicion1 = (f, g) => x => f(g(x));
var dobleTriple1 = composicion1(doble1, triple1);
console.log("composicion de funciones con funciones de flecha:", dobleTriple1(5)); //30


//recrusividad
//La recursividad es una técnica de programación en la que una función se llama a sí misma para resolver un problema.
//Ejemplo de recursividad
function factorial(n) { 
    if (n === 0) { 
        return 1;
    } else {
        return n * factorial(n - 1); //llamada recursiva a la función factorial 
    }
}
console.log("recursividad:", factorial(5)); //120

//Ejemplo de recursividad con funciones de flecha
var factorial1 = n => n === 0 ? 1 : n * factorial1(n - 1);
console.log("recursividad con funciones de flecha:", factorial1(5)); //120

//Ejemplos
//Funcion que suma dos numeros y luego multiplica el resultado por un tercer numero
const pre = a => a + 2;
const mult = a => a * 3;

const res = pre(mult(5));

console.log("resultado de la funcion:", res );