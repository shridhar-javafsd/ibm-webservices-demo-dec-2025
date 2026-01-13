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

    getDetails(): string {
        let data: string = `${this.id} ${this.name} ${this.salary}`;
        return data;
    }
}

