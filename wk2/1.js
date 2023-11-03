class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  printMe() {
    console.log(`${this.name} is ${this.age} old`)
  }
}

const p1 = new Person('jim', 22)
p1.printMe()

class Employee extends Person {
  constructor(name, age, job) {
    super(name, age)
    this.job = job
  }
}

const e1 = new Employee('john', 25, 'accountant')
console.log(e1.name)
console.log(e1.job)
