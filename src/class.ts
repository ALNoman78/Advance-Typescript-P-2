// opp - class >>> to >>> object

// class Animal {
//     name: string;
//     species: string;
//     sound: string;

//     constructor(name: string, species: string, sound: string) {
//         this.name = name;
//         this.sound = sound;
//         this.species = sound
//     }

//     makeSound() {
//         console.log(`${this.name} is make sound : ${this.sound}`)
//     }
// }

// const cat = new Animal("Snow", "miyaw", "cat")
// const dog = new Animal("dogeesh", "ghew ghew", "dog")



// dog.makeSound()



// todo this is all about the class and constructor

class vehicle {

    constructor(public name: string, public engine: string, public topSpeed: string) {

    }
    carSound() {
        console.log(`${this.name} top speed is ${this.topSpeed}`)
    }
}

const car = new vehicle("Audi", "vet engine", "190k/m")

console.log(car.name)