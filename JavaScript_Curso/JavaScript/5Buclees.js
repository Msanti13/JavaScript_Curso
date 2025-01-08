//Bluclees con LoopToken While
var  cont = 0;
while (cont < 5) {
    console.log("Bucle while:", ++cont);
    
}

console.log("Bucle while terminado", cont);


//While and do while
var w = 0;
var verdad = true;
while (verdad=== true) {
    console.log("Bucle while:", w);
    w++;
    if (w === 5) {
        verdad = false;
    }
}
console.log("Bucle while terminado", w);



//do while
var count = 0;

do {
    console.log("Bucle do while:", ++count);
}
while (count < 5);
console.log("Bucle do while terminado", count);

//Otro ejemplo de bucle do while
var cou = 100;
console.log("Otro ejemplo do While:");

while (cou < 5) {
    console.log("Bucle while:", cou);
}
do {
    console.log("Bucle do while:", cou);

} while (cou < 5);

console.log("Bucle do while terminado", cou);

//Bucle for
console.log("Bucle for:");
for (var i = 0; i < 5; i++) {
    console.log("Bucle for:", i);
}

//Ahora veamos qué le pasa a la for bucle si eliminamos el declaraciones opcionales.
console.log("Bucle for sin declaraciones opcionales:");
var j = 0;
for (; j < 5;) {
    console.log("Bucle for sin declaraciones opcionales:", j++);
}

//Otro ejemplo
console.log("Otro ejemplo de bucle for:");
var k = 0;
var l = 0;
for (name = "i", loop = "loop"; k < 5; k+=2, l++) {
    console.log(name, loop, i);
}
console.log("valor de conteo", l);

//Break y continue
console.log("Continue:");
for (var m = 0; m < 5; m++) {
    if (m === 3) {
        continue;
    }
    console.log("Continue:", m);
}

console.log("Otro ejemplo continue:");
for (var s = 0; s < 10; s++) {
    if (s % 2 === 0) {
        continue; //Salta los números pares 
    }
    console.log( s);
}

console.log("Break:");
for (var n = 0; n < 5; n++) {
    if (n === 3) {
        break;
    }
    console.log("Break:", n);
}

//iterar sobre un objeto o matriz}
console.log("Iterar sobre un objeto o matriz:");
var arr = [10, 8, 33, 40, 51];
for (var i = 0; i < arr.length; i++) {
    console.log( arr[i]);
}

console.log("Iterar sobre un objeto o matriz al revés:");
for (var i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}

//accedientoa una matriz multidimensional
console.log("Accediendo a una matriz multidimensional:");
var arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j]);
    }
}

//metodo forEach
console.log("Metodo forEach:");
var arr = [10, 8, 33, 40, 51];
arr.forEach(function (element) {
    console.log(element);
});


//ITERANDO OBJETOS
console.log("Iterando objetos con keys:");
var obj = {name: "oso", real: 20};
console.log(Object.keys(obj)); //muestra solo las claves

console.log("Iterando objetos con values:");
console.log(Object.values(obj)); //muestra solo los valores

console.log("Iterando objetos con entries:"); //muestra las claves y los valores
console.log(Object.entries(obj));

//Uso de métodos de objetos para iteración
var obj2 = {name: "oso", real: 20, peso: 100};
var keys = Object.keys(obj2);
for (var i = 0; i < keys.length; i++) {
    console.log("key:", keys[i], "Valores", obj2[keys[i]]);
}

//for in loop
console.log("For in loop:");
for (var key in obj2) {
    console.log("key:", key, "Valores", obj2[key]);
}

//EJercicio

var raw_arr = [[{name: "oso", poblacion: 1000, temperatura : 3.0}],
                [{name: "carlos", poblacion: 5000, temperatura : 5.0}],
                [{name: "diaz", poblacion: 6500, temperatura : 8.0}],
                [{name: null, poblacion: null, temperatura : 9.5}]];

var ans = 0;

for (var i = 0; i < raw_arr.length; i++) {
    for (var j = 0; j < raw_arr[i].length; j++) {
        if (raw_arr[i][j] !== null) {
            if(raw_arr[i][j]['temperatura'] <= 10.0){
                ans += raw_arr[i][j]['poblacion'];
            }
        }
    }
        
     
}

console.log("El resultado de la operacion es:", ans);