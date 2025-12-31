// // node 02-js-callbacks.js 

// let num = 10;
// console.log(num); // 10 - named value  
// console.log(11); // 11 - anonymous value 

// const fun = function () {};
// const fun2 = () => {};

// const testFun = (arg) => {
//     // console(arg * 10); // pass number 
//     // console.log(arg.city); // pass object with the property city
//     arg(); // pass ??
// };

// // testFun(10); // number passed 
// // testFun({city: 'Hyderabad', pin: 500001}); // object passed 
// testFun(() => {});
// testFun(function () {});

// const testFun = (arg) => {
//     console.log('caller function called.');
//     arg();
// };

// testFun(() => { console.log(' callback function called'); });

// const callerFun = (arg) => {
//     console.log('caller function called.');
//     arg(); // function call 
// };

// const namedFun = () => { console.log('named callback function called'); };
// callerFun(namedFun);

// callerFun(() => { console.log('anonymous callback function called'); });

// Thread.sleep(2000); // Java 

// paused execution for some time 
// setTimeout(() => {}, timeout);
// setTimeout(function, timeout);

// console.log('one');
// setTimeout(() => { console.log('two'); }, 2000);


// console.log('one');
// console.log('two');
// console.log('three');

// // asynchronous JavaScript 
// console.log('one');
// setTimeout(() => {
// console.log('two');
// }, 2000);
// console.log('three');

// // ======================================
// // // Problems of asynchronous JavaScript 
// // ======================================

// // no delay here - 
// // const getMessage = () => {
// //     return { message: 'How are you?' };
// // }

// // const data = getMessage();
// // console.log(data.message);

// // some delay here - 

// const getMessage = () => {
//     // delay due to database connection 
//     setTimeout(() => {
//         return { message: 'How are you?' };
//     }, 2000);
// }

// const data = getMessage(); // line 1 
// console.log(data.message); // line 2 

// // TypeError: Cannot read properties of undefined (reading 'message')

// // ======================================
// // //solution 1 - callbacks 
// // ======================================

// const getMessage = (arg) => {
//     // delay due to database connection 
//     setTimeout(() => {
//         arg({ message: 'How are you?' });
//     }, 2000);
// }

// // getMessage(() => {});
// // getMessage((param) => {});

// getMessage((param) => { console.log(param.message);});

// ======================================
// //solution 2 - Promise  
// ======================================

const getMessage = (arg) => {
    // delay due to database connection 
    setTimeout(() => {
        arg({ message: 'How are you?' });
    }, 2000);
}

// getMessage(() => {});
// getMessage((param) => {});

getMessage((param) => { console.log(param.message);});
