class Students {
    name : string;
    id : number;
    age : number;
    address : string;

    constructor(name: string, id : number , age : number , address : string){
        this.name = name
        this. id = id
        this.age = age
        this.address = address
    }

    getSleep(numberOfHours : number){
        console.log(`${this.name} sleep ${numberOfHours} hrs`)
    }
}

const student1 = new Students("Moule", 19, 23, "Mirpur 14")

student1.getSleep(15);


class Teacher {
    name : string;
    age : number;
    address : string;
    designation : string; // this one is extra property

    constructor(name: string, age : number , address : string , designation: string){
        this.name = name
        this.age = age
        this.address = address
        this.designation = designation
    }

    getSleep(numberOfHours : number){
        console.log(`${this.name} sleep ${numberOfHours} hrs`)
    }

    takeClass(){
        console.log(`${this.name} take hrs of class`)
    }
}

const teacher1 = new Teacher ('Noman', 22 , 'Mirpur-13','Senior Teacher' )