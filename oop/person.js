const Person = function (fN, lN, a, l = []) {
    this.firstName = fN;
    this.lastName = lN;
    this.age = a;
    this.likes = l;
}

Person.prototype.getBio = function(){
    let bio = `${this.firstName} is ${this.age}`;
    this.likes.forEach((like) => {
        bio += ` ${this.firstName} likes ${like}.`;
    });
    return bio;
}

Person.prototype.setName = function(fullName){
    let fNL = fullName.split(' ');
    this.firstName = fNL[0];
    this.lastName = fNL[1];
}

const p1 = new Person('Hardik', 'Kardam', 21, ['Football']);
const p2 = new Person('Yash', 'Kardam', 19);

console.log(p1);
console.log(p1.getBio());
console.log(p2);