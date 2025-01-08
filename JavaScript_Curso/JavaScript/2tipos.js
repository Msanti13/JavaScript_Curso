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

//Conversion Tipos
//string

var str = "10";
var boolen = true;
var nul = null;
var undef = undefined;

var str_num = new String(str).valueOf();
var str_bool = new String(boolen).valueOf();
var str_null = new String(nul).valueOf();
var str_undef = new String(undef).valueOf();

console.log("str:". str_num,"- type:", typeof(str_num));
console.log("boolen:", str_bool,"- type:", typeof(str_bool));
console.log("null:", str_null,"- type:", typeof(str_null));
console.log("undef:", str_undef,"- type:", typeof(str_undef));

//boleean
var numm = 8;
var ss = "true";
var nulll = null;
var undefi = undefined;

var bool_num = new Boolean(numm).valueOf();
var bool_str = new Boolean(ss).valueOf();
var bool_null = new Boolean(nulll).valueOf();
var bool_undef = new Boolean(undefi).valueOf();

console.log("numm:", bool_num,"- type:", typeof(bool_num));
console.log("ss:", bool_str,"- type:", typeof(bool_str));
console.log("nulll:", bool_null,"- type:", typeof(bool_null));
console.log("undefi:", bool_undef,"- type:", typeof(bool_undef));


//number
var sss = '11';
var bo = true;
var parse = "10.5";
var float = 10.5;


var num_sss = new Number(sss).valueOf();
var num_bo = new Number(bo).valueOf();
var num_parse = parseInt(parse).valueOf();
var num_float = parseFloat(float).valueOf();

console.log("sss:", num_sss,"- type:", typeof(num_sss));
console.log("bo:", num_bo,"- type:", typeof(num_bo));
console.log("parse:", num_parse,"- type:", typeof(num_parse));
console.log("float:", num_float,"- type:", typeof(num_float));

