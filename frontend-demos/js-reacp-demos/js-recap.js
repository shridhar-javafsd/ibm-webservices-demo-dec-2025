// // rest and spread in JS 

// // // rest 

// // const nums = (...abc) => {
// //     console.log(abc);
// //     // code 
// // };

// // nums(10);
// // nums(10, 20);
// // nums(10, 20, 30);

// // spread 

// // const nums = [10, 20, 30];
// // const moreNums = [...nums, 40, 50];
// // console.log(moreNums);

// // const nums2 = [10, 20, 30, 40, 50];
// // const [ten, twenty, ...remaining] = nums2; // rest or spread 
// // console.log(remaining);

// const userData = { id: 101, name: 'Sonu', salary: 10.25 };
// const moreData = { phone: 986543210, email: 'sonu@gmail.com' };

// const fullData = { ...userData, ...moreData };
// console.log(fullData);

// object destructuring in js ^ 

// 

// keys, values of object and object array 

const employees = [
    { id: 101, name: 'Sonu', salary: 10.50 },
    { id: 102, name: 'Monu', salary: 11.75 },
    { id: 103, name: 'Tonu', salary: 12.25 }
];

employees.forEach(e => console.log(e))
// employees.filter
// employees.map
// employees.reduce
// employees.slice


