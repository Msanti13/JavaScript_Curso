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
//length
console.log("Popiedad length:");
console.log("Propiedad length:", arr2.length);
console.log("Propiedad length:", arr3.length);