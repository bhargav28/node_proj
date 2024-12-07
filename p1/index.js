
console.log("Hello World");

const person = {
    "name": "Bhargav",
    "age": 27,
    "city": "Vadodara"
}

const myArr = Object.values(person);

console.log(`${myArr}`);
console.log(myArr + 'Array : ');

// Stringfy json
let myString = JSON.stringify(person);
console.log("\n" + myString);

// Object.entries
console.log("\n");
const fruits = {
    Banana: 300,
    Orange: 200,
    Apple: 500,
}

let text = "";
for(let [x, y] of Object.entries(fruits)) {
    console.log(x + " : " + y);
}


/// Object Constructor
class Person {
    constructor(first, last, age, eye) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.eyeColor = eye;
    }
}

const p1 = new Person("John", "Doe", 50, "blue");
const p2 = new Person("John", "Doe", 50, "blue");
const p3 = new Person("John", "Doe", 50, "blue");
const p4 = new Person("John", "Doe", 50, "blue");

console.log("\nPerson class : " + p1.firstName);

Person.prototype.language = "English";

console.log("Language: " + p1.language);