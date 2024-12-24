// Person Class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
    }
}

// Employee Class extending Person
class Employee extends Person {
    constructor(name, age, job) {
        super(name, age); // Calls the constructor of the Person class
        this.job = job;  // Initializes job property
    }

    jobGreet() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.job}.`);
    }
}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;

