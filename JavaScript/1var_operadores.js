
//VARIABLES Y OPERADORES

var  var1 = 5;
var  var2 = 10;
var  var3 = 15;
console.log("Variables original:");
console.log("var1:"+var1, " var2:" + var2, "var3:" +var3);
var temp = var1;
var1 = var3;
var3 = var2;
var2 = temp;
console.log("Variables intercambiadas:")

console.log ("Variable1:"  + var1, "Variable2:" + var2, "Variable3:" + var3);

//Operadores aritmeticos
suma = 5+5;
resta = 5-5;
producto = 5*5;
division = 5/5;
residuo = 10%3;
dato = 2;
dato1 = 2;
expo = 2**3;
dato++;
dato1--;
console.log("Operadores aritmeticos:");
console.log("Suma: " + suma);
console.log("Resta: " + resta);
console.log("Producto: " + producto);
console.log("Division: " + division);
console.log("Residuo: " + residuo);
console.log("Exponenciacion: " + expo);
console.log("Incremento: " + dato);
console.log("Decremento: " + dato1);

//Operadores de comparacion
var a = 5;
var b = 5;
var c = "5";
var d = 8;

console.log("Operadores de comparacion:");
console.log("5 es igual a 5?", a === b);
console.log("5 es igual a '5'?", a === c);
console.log("5 no es igual a 5", a !== b);
console.log("5 no es igual a '8'?", a !== d);
console.log("5 es mayo o igual a 5?", a >= b);
console.log("5 es menor a 8?", a < d);
console.log("8 es mayor a 5?", d > a);

//Operadores logicos
var e = 5;
var f = 10;
var g = 15;
var h = 20;

console.log("Operadores logicos:");
console.log("5 es menor a 10 y 15 es mayor a 20?", e < f && g > h);
console.log("5 es menor a 10 o 15 es mayor a 20?", e < f || g > h);
console.log("5 es menor a 10?", e < f && ! g > h);

//Operadores de asignacion
var i = 5;
i += 10;
console.log("Operadores de asignacion:");
console.log("variable + 5 es igual a", i);
i -= 10;
console.log("variable - 5 es igual a", i);
i *= 2;
console.log("variable * 5 es igual a", i);
i /= 2;
console.log("variable / 5 es igual a", i);
i %= 2;
console.log("variable % 5 es igual a", i);
i **= 2;
console.log("variable ** 5 es igual a", i);


//Ejercios Para 2 variables, x e y, encuentre el doble del valor de la suma de las dos variables.
x = 10;
y = 20;
var ans = 2*(x+y);
console.log("El dobre de la suma de las dos variables es:", ans);

//Ejercicio 2
ans = 11;
ans+=(ans%10); //Suma el residuo de la division entre 10
console.log("El resultado de la operacion es:", ans);

//Ejercicio 3
x=a+10;
y=a-10;
z=a%10;
ans = a/(x*y*z);
console.log("El resultado de la operacion es:", ans);

//Ejercicio 4
a /=((a+10)*(a-10)*(a%10));
ans = a;
console.log("El resultado de la operacion es:", ans);    

var s;
console.log("El valor de s es:", s);