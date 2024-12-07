//Expresiones regulares
//Las expresiones regulares son patrones utilizados para encontrar una determinada combinación de caracteres dentro de una cadena de texto.
//Las expresiones regulares se crean utilizando dos barras inclinadas.

//Sintaxis
var re = /ab+c/;
//Las expresiones regulares se pueden crear utilizando el constructor RegExp.
var re1 = new RegExp('ab+c');
console.log(re, re1); //ambos muetran el mismo resultado

//Metodos de las expresiones regulares
//en js todo es un objeto, incluidas las expresiones regulares.
console.log(typeof re); //object

//Metodo exec()
//El método exec() se utiliza para buscar una coincidencia en una cadena de texto.
var str = "abcdefg";
var re2 = /d/;
var result = re2.exec(str);
console.log(result); //d

//otro ejemplo
let re3 = /apple/;
let result1 = re3.exec("apple is a fruit");
console.log(result1); //apple


//Metodo test()
//El método test() se utiliza para buscar una coincidencia en una cadena de texto.
var str1 = "abcdefg";
var re4 = /d/;
var result2 = re4.test(str1);
console.log(result2); //true

//Metodo search()
//El método search() se utiliza para buscar una coincidencia en una cadena de texto.
var str2 = "abcdefg";
var re5 = /d/;
var result3 = str2.search(re5);
console.log(result3); //3 (la posición de la coincidencia)

let string = "apple_is_a_fruit";
let = index = string.search("is");
let = index1 = string.search("Is");
console.log(index); //6 (la posición de la coincidencia)
console.log(index1); //-1

//El search el método nos permite pasar un objeto RegExp para hacer que la búsqueda sea más eficiente y flexible
let index2 = string.search(/is/i); //i es un modificador que ignora mayúsculas y minúsculas. usando cuantiadores
console.log("indice string a traves de expresiones regulares", index2); //6


//METODO REPLACE
//El método replace() se utiliza para reemplazar una coincidencia en una cadena de texto.
var str3 = "apple is a fruit";
var re6 = /apple/;
var result4 = str3.replace(re6, "orange");
console.log(result4); //orange is a fruit

//REPLACE con expresiones regulares
let str4 = "apple is a fruit";
let result5 = str4.replace(/Apple/i, "orange"); //i es un modificador que ignora mayúsculas y minúsculas
console.log(result5); //orange is a fruit