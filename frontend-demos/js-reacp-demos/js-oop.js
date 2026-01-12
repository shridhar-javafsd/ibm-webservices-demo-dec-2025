// // OOP is JS - 
// // introduces in ES6 onwards 
// // Class , object of class, inheritence, etc 

// // 

// class Employee {

//     id;
//     name;
//     salary;
//     static officePhone = 123;

//     constructor(id, name, salary) {
//         this.id = id;
//         this.name = name;
//         this.salary = salary;
//     }

//     printData() {
//         console.log(this.id, this.name, this.salary);
//     }

//     static fun() {
//         console.log(this.officePhone);

//     }
// }

// const emp1 = new Employee();
// emp1.printData();
// const emp2 = new Employee(102, 'Monu');
// emp2.printData();
// const emp3 = new Employee(103, 'Tonu', 12.50);
// emp3.printData();
// Employee.fun();

// // Java
// // Employee emp1 = new Employee();

// // JavaScript
// // const emp1 = new Employee();


// Inheritance in JS 

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

class ContractualEmployee extends Employee {

    // constructor() {

    // }

    // constructor(id, name, salary) {
    //     super(id, name, salary);
    // }
}

const contraEmp = new ContractualEmployee(101, 'Sonu', 12.50);
contraEmp.printData();
