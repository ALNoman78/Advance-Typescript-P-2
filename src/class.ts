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
}

const cat = new Animal("snow", "cat", "miywa")
console.log(cat)