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

