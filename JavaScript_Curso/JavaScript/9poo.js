//PROGRAMACION ORIENTADA A OBJETOS

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;

        this.rasa = "Perro";
    }
    speak() {
        console.log("el " + animal.name + " hace un ruido");
    }
   
}


animal = new Animal("Tyzon", 5);
console.log(animal.name, animal.age);
console.log('Rasa:', animal.rasa);
animal.speak();

//Metodos estaticos
class Animal2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    static ruido() {
        console.log("soy un metpodo estatico");
    }
}

animal2 = new Animal2("Tyzon", 5);
Animal2.ruido(); //no se necesita instanciar la clase para llamar al metodo estatico
//animal2.ruido(); //no se puede llamar un metodo estatico desde una instancia de la clase

//Proteccion de propiedades
class Persona {
    constructor(name, age) {
        this.name = name;
        this._age = age; //propiedad privada
 
    }
    //metodo para acceder a la propiedad privada
    get acceder() {
        return this._age;
    }

    
}

persona = new Persona("Tyzon", 5);
console.log(persona.acceder); 

//Herencia
class Animal3 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    speak() {
        console.log("el " + animal.name + " hace un ruido");
    }
}

class Perro extends Animal3 {
    constructor(name, age, rasa) {
        super(name, age); //llama al constructor de la clase padre
        this.rasa = rasa;
    }
}

perro = new Perro("Tyzon", 5, "Pastor Aleman");
console.log(perro.name, perro.age, perro.rasa);
perro.speak();


//json en javascript
//json.parse() convierte un string en un objeto
//json.stringify() convierte un objeto en un string
var json = '{"name":"Tyzon", "age":5}';
var obj = JSON.parse(json); //convierte el json en un objeto
console.log(obj.name, obj.age);
console.log("tipo que es obj", typeof obj);
console.log("tipo que es json", typeof json);

//convertir un objeto en un string
console.log("convertir un objeto en un string");
var obj2 = {name:"Tyzon", age:5};
var json2 = JSON.stringify(obj2); //convierte el objeto en un string
console.log("tipo que es obj2", typeof obj2);
console.log("tipo que es json2", typeof json2);


//EJRCICIO DE POO

class Shape{
    constructor(name){
        this._name = name; //propiedad privada
    }
   
}

class Rectangle extends Shape{
    constructor(name, side1, side2){
        super(name);
        this.side1 = side1;
        this.side2 = side2;
    }
    get getarea(){
        var area =  this.side1 * this.side2;
        console.log("El area del rectangulo es: ", area);
        
    }

    get cuadrado(){
        if(this.side1 == this.side2){
            console.log("Es un cuadrado");
        }else{
            console.log("No es un cuadrado");
        }
    }

    escuadrado(){
        if ()

retangle = new Rectangle("Rectangulo", 4, 5);
retangle.getarea;
retangle.cuadrado;
