// // type - 
// type Employee = {
//     id: number;
//     name: string;
//     salary: number;
// };

// const emp1: Employee = {
//     id: 102,
//     name: 'Monu',
//     salary: 12.50
// };
// console.log(emp1);

// // interface - 1
// interface Employee {
//     id: number;
//     name: string;
//     salary: number;
// };

// const emp2: Employee = {
//     id: 102,
//     name: 'Monu',
//     salary: 12.50
// };
// console.log(emp2);

interface Employable {
    id: number;
    name: string;
    salary: number;
    getDetails(): string;
}

class Employee implements Employable {

    id: number;
    name: string;
    salary: number;

    constructor(id: number, name: string, salary: number) {
        this.id = id; this.name = name; this.salary = salary;
    };

    getDetails(): string {
        let data: string = `Id: ${this.id}, Name: ${this.name}, Salary: ${this.salary}`;
        return data;
    }
}

const emp = new Employee(101, 'Sonu', 10.25);
console.log(emp.getDetails());
const emp2 = new Employee(101, 'Sonu');
console.log(emp2.getDetails());

