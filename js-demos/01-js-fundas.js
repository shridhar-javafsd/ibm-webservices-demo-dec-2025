// // // // // // // JavaScript fundamentals 

// // // // // // // datatypes, variables, operators, control flow, functions, objects, arrays 

// // // // // // // console.log("js fundas");

// // // // // // // varibale declarations 

// // // // // // // java 
// // // // // // // int num = 10;

// // // // // // // JS 
// // // // // // // num = 10; // don't do this
// // // // // // // var num2 = 20; // don't do this
// // // // // // // const num3 = 30; // default choice 
// // // // // // // let num4 = 40; // use this when you need to re-assign value

// // // // // // // const num2 = 20;
// // // // // // // console.log(num2);
// // // // // // // num2 = 30; // error 
// // // // // // // console.log(num2);

// // // // // // // let num = 10;
// // // // // // // console.log(num);
// // // // // // // num = 20;
// // // // // // // console.log(num);

// // // // // // // datatypes in js - number, string, boolean, null, undefined, object, symbol

// // // // // // let num;
// // // // // // console.log(typeof num);
// // // // // // console.log(num);
// // // // // // num = 10;
// // // // // // console.log(typeof num);
// // // // // // console.log(num);
// // // // // // num = 10.25;
// // // // // // console.log(typeof num);
// // // // // // console.log(num);
// // // // // // num = 'abc';
// // // // // // console.log(typeof num);
// // // // // // console.log(num);
// // // // // // num = false;
// // // // // // console.log(typeof num);
// // // // // // console.log(num);

// // // // // // // string literal
// // // // // // const myName = 'Sonu';
// // // // // // const anotherName = "Monu";
// // // // // // const yetAnotherName = `Tonu`;

// // // // // // // string concatenation
// // // // // // const fullName = myName + ' ' + anotherName;
// // // // // // const fullName2 = `${myName} ${anotherName}`; // using backticks 
// // // // // // console.log(fullName);
// // // // // // console.log(fullName2);

// // // // // // // Arrays in JS 

// // // // // // const numbers = [10, 20, 30, 40, 50];
// // // // // // console.log(numbers);
// // // // // // console.log(typeof numbers);
// // // // // // console.log(numbers[0]);

// // // // // // const mixedArray = [10, 'abc', true, null, undefined, {name: 'Sonu'}, [1,2,3]];
// // // // // // console.log(mixedArray);

// // // // // // // Objects in JS

// // // // // const employee = {
// // // // //     name: 'Sonu',
// // // // //     designation: 'Software Engineer',
// // // // //     email: 'sonu@gmail.com',
// // // // //     phones: [9876543210, 7894561230],
// // // // //     salary: 50000,
// // // // //     address: {
// // // // //         city: 'Mumbai',
// // // // //         pin: 400001
// // // // //     },
// // // // //     isIndian: true
// // // // // };

// // // // // console.log(employee);
// // // // // console.log(employee.name);
// // // // // console.log(employee.phones[0]);
// // // // // console.log(employee.address.city);

// // // // // // truthy falsy values in JS

// // // // // false, 0, "", null, undefined, NaN -> falsy

// // // // let num = 'abc';

// // // // if (num) {
// // // //     console.log("Truthy");
// // // // } else {
// // // //     console.log("Falsy");
// // // // }   

// // // // // operators in JS - arithmetic, assignment, comparison, logical

// // // console.log(10 == 10); // true 
// // // console.log('10' == 10); // compares values -  true
// // // console.log('10' === 10); // compares types and values - false
// // // console.log('10' !== 10); // compares types and values - true

// // // // control flow - if-else, switch-case, loops

// // const myArray = [98, 95, 97, 99, 96];

// // // for (let i = 0; i < myArray.length; i++) {
// // //     console.log(myArray[i]);
// // // }

// // // for of loop == for each loop in java 
// // // for in loop 

// // for (let value of myArray) {
// //     console.log(value);
// // }

// // // functions in JS

// // // functions in JS have multiple ways of declaration // syntax 

// function fun() {
//     console.log("Function called");
// };
// // fun(); // function invocation / call
// // // const fun2 = () => {};

// // function add(a, b) {
// //     return a + b;
// // }
// // const sum = add(10, 20);
// // console.log("Sum is:", sum);

// // function add(a, b) {
// //     console.log( a + b);
// // }

// // add(); // NaN
// // add(10); // NaN
// // add(10, 20); // 30
// // add(10, 20, 30); // 30
// // add('abc', 'def'); // abcdef

// function add(a = 3, b = 5) {
//     console.log(a + b);
// }

// add(); // 8
// add(10); // 15
// add(10, 20); // 30


// // callbacks 

// // Old JS Function 
// function addNum1(a, b) { return a + b; };

// // Arrow Function 
// const addNum2 = (a, b) => { return a + b; };

const employee = {
    id: 101,
    name: 'Sonu',
    printDataArrow: () => { console.log(this); }, // undefined 
    printDataOld: function () { console.log(this); } // Sonu
};

// employee.printDataOld();
employee.printDataArrow();


