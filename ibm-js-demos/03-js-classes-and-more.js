// // node 03-js-classes-and-more.js

// // JS object 
// const employee = {
//     id: 101,
//     name: 'Sonu',
//     salary: 10.25
// }

// console.log(employee.name);

class Employee {
    id;
    name;
    salary;

    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    printData() {
        console.log(this.id, this.name, this.salary);
    }
}

// Java 
// Employee emp = new Employee();
// JavaScript 
const emp = new Employee(101, 'Sonu', 10.50);
emp.printData();


