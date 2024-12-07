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

