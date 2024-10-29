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