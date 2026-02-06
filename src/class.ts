// opp - class >>> to >>> object 

class Animal {
    name: string;
    species: string;
    sound: string;

    constructor(name: string, species: string, sound: string) {
        this.name = name;
        this.sound = sound;
        this.species = sound
    }

    makeSound() {
        console.log(`The animal is make sound`)
    }
}

const cat = new Animal("snow", "cat", "miywa")
// console.log(cat)
console.log(cat.makeSound())

// todo this is all about the class and constructor

class Bike {
    model: string;
    serial_number: string;
    tank: string;
    price: string;

    constructor(model: string, serial_number: string, tank: string, price: string) {
        this.model = model
        this.serial_number = serial_number
        this.tank = tank
        this.price = price
    }
    customizeBike() {
        console.log("This is method ")
    }
}