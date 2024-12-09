var a = 3
var b = 2
var c = 1
console.log("variables originales:", a, b, c)
var temp = a
var a = b
var b = c
var c = temp

console.log ("variables intercambiadas:", a,b,c)
// Compare this snippet from JavaScript_Curso/JavaScript/1var_operadores.js:
//

//operadores
var dato = 5
dato++
console.log("resultado de incremento:", dato) 
dato--
console.log("resultado de decremento:", dato)

//operadores de comparacion
var a = 5
a*=5
console.log("resultado de multiplicacion:", a)

var b = 5
if (b%2 === 0){  
    console.log("el numero es par")
}   
else{
    console.log("el numero es impar")
}

var s = 0
var t = 0
var u = 0

if (s<t && t<u){
    console.log("s es menor que t y t es menor que u")
}
else if (s<t || t<u){
    console.log("s es menor que t o t es menor que u")
}
else{
    console.log("no se cumple ninguna condicion")
}


//obejtos en JavaScript
//obejtos agregar valor y modificar
var obj = {name:"oso", real: 20} //objeto con dos propiedades
obj.number = 13; //agregar una propiedad
obj['obj2'] = {}; //agregar otra propiedad
console.log('nuestro objeto:', obj) //imprimir el objeto
console.log('Tipo de nuestro objeto:' , typeof(obj)); //imprimir el tipo de objeto

//Acceso a la propiedad
//Puede acceder a una propiedad de un objeto utilizando . y [] operadores. Veamos un ejemplo.
console.log("esta es una propiedad del objeto:", obj.real)

//practicando array multidimensional

var arr1 = new Array(6) //arreglo vacio

arr1.push(1,2,3,4,5,6) //agregar elementos al arreglo
console.log("arreglo con 6 elementos:", arr1);
var arr2 = arr1.slice() 
console.log("array copia del array 1:", arr2);
console.log("porpiedad", arr2.length) //resultado 12 porque se copio el arreglo 1

var array = [[1,2,3],[4,5,6],[7,8,9]] //arreglo multidimensional
console.log("arreglo multidimensional:", array)
console.log ("longitud", array.length) //longitud del arreglo

