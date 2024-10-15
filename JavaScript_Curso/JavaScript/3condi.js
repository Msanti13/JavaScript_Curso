//Condicionales
var variable = 5;
if (variable === 0) {
    variable = 1;
}
else if (variable === -1) {
    variable = 0;
}
else if (variable === 1) {
    variable = 0;
}
else {
    console.log("No se cumple ninguna condicion");
}

//Operadores ternarios y condicionales
console.log("Operadores ternarios y condicionales:");
let varia = 0;
if (varia === 0){
    varia = 1;
} 
else{
    varia = 0;
}
console.log(varia);

varia = 0;
ress = varia === 0 ? 1 : 0; //1 if variable es 0 else 0
console.log(ress);
    

let oso = 60;

resu = oso > 50 ? "oso es mayor a 50" : "oso es menor a 50";
console.log(resu);


//Otro ejemplo
let num = true;
console.log("Ejemplo de ternarios:");
num ? console.log("Es verdadero") : console.log("Es falso");

//Ejercicio Calculadora
left_operand = 10;
right_operand = 20;
operator = "/";
//let all_operators = ["+", "-", "*", "/"];

ans = operator === "+" ? left_operand + right_operand :
    operator === "-" ? left_operand - right_operand :
    operator === "*" ? left_operand * right_operand :
    operator === "/" ? left_operand / right_operand :
    "Operador no valido";
console.log("El resultado de la operacion es:", ans);