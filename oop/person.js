class Person {
    constructor(fN, lN, a, l = []) {
        this.firstName = fN;
        this.lastName = lN;
        this.age = a;
        this.likes = l;
    }
    getBio () {
        let bio = `${this.firstName} is ${this.age}`;
        this.likes.forEach((like) => {
            bio += ` ${this.firstName} likes ${like}.`;
        });
        return bio;
    }
    set setName(fullName){
        const names = fullName.split(' ');
        this.firstName = names[0];
        this.lastName = names[1];
    }
};

class Employee extends Person {
    constructor(fN, lN, a, p, l = []) {
        super(fN, lN, a, l);
        this.position = p
    }
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
    getBio() {
        let bio = `${this.fullName} is a ${this.position}`;
        return bio;
    }
    getServiceYearsLeft() {
        return 65 - this.age;
    }
}

const Emp1 = new Employee('H', 'K', 21, 'Programmer', ['Football', 'R6']);

console.log(Emp1);
console.log(Emp1.getBio());

// challenge
class Student extends Person {
    constructor(fN, lN, a, g, l = []) {
        super(fN, lN, a, l);
        this.grade = g
    }
    getBio() {
        let bio = `${this.firstName} ${this.lastName} scored ${this.grade}.`;
        if(this.grade >= 35) {
            bio += ` ${this.firstName} passed`;
        } else {
            bio += ` ${this.firstName} failed`;
        }
        return bio;
    }
    upgradeGrade(upd) {
        this.grade += upd;
    }
}

const s1 = new Student('H', 'K', 21, 99, ['Football', 'R6']);
console.log(s1);
s1.upgradeGrade(1);
console.log(s1.getBio());