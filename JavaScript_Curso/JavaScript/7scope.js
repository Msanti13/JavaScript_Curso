//Alcance Global y Local

//Alcance Global
var global = 10;

//Alcance Local
function local() {
    var local = 20;
    console.log("Global es accesible", global);
}
local();
//console.log(local); //Error, local is not defined 



//alcance de funciones
function scope() {
    var local = 20;
    console.log("Local:", local, "Global:", global);
}
scope();

//console.log(local); //Error, local is not defined 

//Alcance de bloque
var a = 10;
if (a > 5) {
    let b = 20;
    var c = 30;
    console.log("a:", a, "b:", b);
}
console.log(a, c); //Error, b is not defined, pero a y c son accesibles

//alcance lexico
var x = 10;
var func = function () {
    var y = 20;
    console.log("x and y son accesibles", "x:", x, "y:", y);
    var nested = function () {
        var z = 30;
        console.log("x, y, z son accesibles por ser internos","x:", x, "y:", y, "z:", z);
    }
    nested();
    return;
}
func();
//console.log(y); //Error, y is not defined
//console.log(z); //Error, z is not defined
console.log("es accesible de manera global:",x); //x is accessible

//ALCANCE DE MODULO
//El alcance de módulo es una característica de los módulos ES6.
//En un módulo, las variables son privadas por defecto y solo son accesibles dentro del módulo.
//Para hacer una variable pública, debemos exportarla explícitamente.
//Para acceder a una variable exportada, debemos importarla en otro módulo.
//Para exportar una variable, usamos la palabra clave export.
