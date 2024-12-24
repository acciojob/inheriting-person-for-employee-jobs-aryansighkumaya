function Person(name,age){
this.name=name
this.age=age


}

Person.prototype.greet=function(){
console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)



}
function Employee(name,age,job){
Person.call(this,name,age)
this.job=job



}
Employee.prototype=Object.create(Person.prototype)
Employee.protype.constructor=Employee


Employee.prototype.jobGreet=function(){
console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`)
}


window.Person = Person;
window.Employee = Employee;