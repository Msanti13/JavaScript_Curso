//obejtos agregar valor y modificar
var obj = {name:"oso", real: 20}
obj.number = 13;
obj['obj2'] = {};
console.log('nuestro objeto:', obj)
console.log('Tipo de nuestro objeto:' , typeof(obj));

//Acceso a la propiedad
//Puede acceder a una propiedad de un objeto utilizando . y [] operadores. Veamos un ejemplo.
var obs = {name: "bar", number: 19, ob3:{} };
var num_obj = obs['number'];
var name = obs.name;

console.log('Nuestro objeto:', obs);
console.log('Tipo de nuesto objeto:', typeof(obs));
//imprimir number del obejto
console.log(`obj['number']: ${obs['number']} , ${num_obj}`);
//imprimir name del objeto
console.log(`obs.name: ${obs.name}, ${name}`);
//imprimir el tipo de propiedad
console.log(`types: ${typeof(obs['number'])}, ${typeof(num_obj)}`)

//Objeto tipo fecha
var objs = new Date()
console.log(objs);
console.log(objs.getFullYear());


//Arreglos
var arr1 = new Array(1,2,"Hola");
var arr2 = ["Hola",2,1];
console.log("Arr1:", arr1);
console.log("Arr2", arr2);
console.log(`Typo de array: ${typeof(arr1)} and arr2: ${arr2}`);
arr2.sort();
console.log("sorted arr2:",arr2);
console.log("lenght of arr2:",arr2.length);
