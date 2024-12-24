// Define the Person class
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    const message = `Hello, my name is ${this.name}, I am ${this.age} years old.`;
    console.log(message); // Keep logging for debug visibility
    return message;       // Return value for test assertion
};

// Define the Employee class
function Employee(name, age, jobTitle) {
    Person.call(this, name, age); // Call the Person constructor
    this.jobTitle = jobTitle;
}

Employee.prototype = Object.create(Person.prototype); // Inherit from Person
Employee.prototype.constructor = Employee;

Employee.prototype.jobGreet = function() {
    const message = `Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`;
    console.log(message); // Keep logging for debug visibility
    return message;       // Return value for test assertion
};

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
