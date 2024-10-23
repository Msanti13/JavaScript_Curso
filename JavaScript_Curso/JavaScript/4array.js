//creando matrices
var arr = new Array(); //creando un array vacio
var arr1 = []; //creando un array vacio
var arr2 = new Array(1, 2, "Hola"); //creando un array con elementos
var arr3 = [12]; //creando un array con elementos 12
var arr4 = new Array(10); //new Array(10) crearía una matriz vacía de tamaño 10 y no una matriz que contenga solo un elemento 10.
console.log(arr, arr1, arr2, arr3, arr4);

//Accediendo a elementos de un array
console.log("Accediendo a elementos de un array:");
var arr5 = arr2[2];
console.log(arr5);

//Mutación de matrices
//Dado que las matrices son objetos, son mutables. Por definición, sus valores se actualizan en asignaciones.
arr2[2] = "Adios";
console.log("Mutación de matrices:", arr2);

//crear una copia de una matriz
var arracopy = arr2.slice();
var arracopy1 = Array.from(arr2);
var arracopy2 = [...arr2];
console.log("Copia de una matriz con slice:", arracopy);
console.log("Copia de una matriz con Array.from:", arracopy1);
console.log("Copia de una matriz con spread operator:", arracopy2);


//Medotos y propiedades de las matrices


//propiedad length
console.log("Popiedad length:");
console.log("Propiedad length:", arr2.length);
console.log("Propiedad length:", arr3.length);

//propiedad prototype
var arr6 = [1, 2, 3];
console.log("Propiedad prototype:", arr6.prototype); //undefined
arr6.prototype = "Hola";
console.log("Propiedad prototype:", arr6.prototype); //Hola
console.log("Propiedad prototype:", arr6);

//Metodos de las matrices
//Metodo push()
console.log("Metodo push():");
var arr7 = [1, 2, 3];
arr7.push(4);
console.log("Metodo push():", arr7);

//Metodo pop()
console.log("Metodo pop():");
var arr8 = [1, 2, 3];
arr8.pop();
console.log("Metodo pop():", arr8); //1,2 elimina el último elemento de la array y lo devuelve a ser asignado a una variable.

//Metodo shift()
console.log("Metodo shift():");
var arr9 = [1, 2, 3];
arr9.shift();
console.log("Metodo shift():", arr9); //2,3 elimina el primer elemento de la array y lo devuelve a ser asignado a una variable.

//Metodo unshift()
console.log("Metodo unshift():");
var arr10 = [1, 2, 3];
arr10.unshift(0);
console.log("Metodo unshift():", arr10); //0,1,2,3 añade un elemento al principio de la array.

//Metodo indexOf()
console.log("Metodo indexOf():");
var arr11 = [1, 2, 3];
console.log("Metodo indexOf():", arr11.indexOf(2)); //1 devuelve el índice del primer elemento coincidente en la matriz.

//Metodo toString()
console.log("Metodo toString():");
var arr12 = [1, 2, 3];
var arr13 = arr12.toString();
console.log("Metodo toString():", arr13, typeof arr13); //1,2,3 convierte una matriz en una cadena de texto.




