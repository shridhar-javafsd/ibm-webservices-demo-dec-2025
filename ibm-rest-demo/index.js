import express from 'express';

const app = express();
const PORT = 3000;

const employeeList = [
    { id: 101, name: 'Sonu', salary: 10.50 },
    { id: 102, name: 'Monu', salary: 12.25 },
    { id: 103, name: 'Tonu', salary: 11.75 },
];

app.use(express.json());

app.get('', (request, response) => {
    console.log('EMS');
    response.send('Welcome to employee management system!');
});

app.get('/employees', (request, response) => {
    console.log(employeeList.length);
    response.json(employeeList);
});

app.get('/employees/:id', (request, response) => {
    const id = parseInt(request.params.id);
    console.log(id);
    const emp = employeeList.find(e => e.id === id);
    response.json(emp);
});

app.post('/employees', (request, response) => {
    const {id, name, salary} = request.body;
    const emp = {id, name, salary};
    employeeList.push(emp);
    console.log(id);
    response.json(emp);
});

// app.put('/employees', () => {});

// app.patch('/employees', () => {});

app.listen(PORT, () => {
    console.log(`App started at: http://localhost:${PORT}`);
});


// // console.log('index.js');

// // import express from express;
// // const app = express();
// // const PORT = 3000;
// // app.get();
// // app.listen();

// import express from 'express';

// const app = express();
// const PORT = 3000;

// app.get('', (request, response) => {
//     console.log('NodeJS');
//     response.send('NodeJS demo');

// });
// app.listen(PORT, () => {
//     console.log(`Open http://localhost:${PORT}`);
// });



// // /*
// // Create a NodeJS project :
// // On CMD -
// // open this folder and run this -
// // npm init -y
// // edit package.json
// // create index.js
// // write code
// // run from CMD :
// // npm start
// // */

// // console.log('NodeJS Demo');

