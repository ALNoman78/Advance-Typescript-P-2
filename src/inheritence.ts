class Person {
    name: string;
    id: number;
    age: number;
    address: string;

    constructor(name: string, id: number, age: number, address: string) {
        this.name = name
        this.id = id
        this.age = age
        this.address = address
    }

    getSleep(numberOfHours: number) {
        console.log(`${this.name} sleep ${numberOfHours} hrs`)
    }
}




class Students extends Person {
    rollNumber: number;

    constructor(name: string, id: number, age: number, address: string, rollNumber: number) {

        super(name, id, age, address)

        this.rollNumber = rollNumber

    }
}

const student1 = new Students("Moule", 19, 23, "Mirpur 14", 202630019)

console.log(student1.rollNumber)




class Teacher extends Person {

    designation: string; // own property

    constructor(name: string, id: number, age: number, address: string, designation: string) {


        // todo If i use Person class constructor then I've to use ** super() ** method

        super(name, id, age, address)

        this.designation = designation
    }

    takeClass(numOfClass: number) {
        console.log(`${this.name} take ${numOfClass} hrs of class`)
    }
}

const teacher1 = new Teacher('Noman', 16306, 22, 'Mirpur-13', 'Senior Teacher')

teacher1.address