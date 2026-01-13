// // type - 
// type Employee = {
//     id: number;
//     name: string;
//     salary: number;
// };
var Employee = /** @class */ (function () {
    function Employee(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    ;
    Employee.prototype.getDetails = function () {
        var data = "Id: ".concat(this.id, ", Name: ").concat(this.name, ", Salary: ").concat(this.salary);
        return data;
    };
    return Employee;
}());
var emp = new Employee(101, 'Sonu', 10.25);
console.log(emp.getDetails());
var emp2 = new Employee(101, 'Sonu');
console.log(emp2.getDetails());
