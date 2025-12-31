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

// // ======================================
// // //solution 2 - Promise  
// // ======================================

// // // java 
// // Employee obj = new Employee();
// // Employee obj = new Employee(101, "Sonu", 50.75);
// // JavaScript
// // const obj = new Promise();
// // const obj = new Promise(arg1, arg2);
// // const obj = new Promise(() => {}); 
// // const obj = new Promise((arg1, arg2) => {}); 
// // return new Promise((resolve, reject) => { });

// const getMessage = () => {
//     return new Promise((res, rej) => {
//         let isDataAvailable = false; // true // false 
//         setTimeout(() => {
//             if (isDataAvailable)
//                 res({ message: 'How are you?' });
//             else
//                 rej({ error: 'Data not found!' });
//         }, 2000);
//     });
// }

// // getMessage().then().catch();
// // getMessage().then(() => {}).catch(() => {});
// // getMessage().then((response) => { console.log(response); }).catch((error) => { console.log(error); });

// getMessage()
//     .then((res) => {
//         console.log(res.message);
//     })
//     .catch(
//         (err) => {
//             console.log(err.error);
//         })
//     .finally((arg) => {
//         console.log('Done!');
//     });

// ======================================
// //solution 3 - async await   
// ======================================

// 1. function with Promise object only with resolve 

// const getMessage = () => {
//     return new Promise((res) => {
//         setTimeout(() => {
//             res({ message: 'How are you?' });
//         }, 2000);
//     });
// }

// const consumeMessage = async () => {
//     const data = await getMessage();
//     console.log(data.message);
// };

// consumeMessage();

// 1. function with Promise object with resolve and reject 

const getMessage = () => {
    return new Promise((res, rej) => {
        let isDataAvailable = true; // true // false 
        setTimeout(() => {
            if (isDataAvailable)
                res({ message: 'How are you?' });
            else
                rej({ error: 'Data not found!' });
        }, 2000);
    });
}

const consumeMessage = async () => {
    try {
        const data = await getMessage();
        console.log(data.message);
    }
    catch (err) {
        console.log(err.error);
    }
};

consumeMessage();