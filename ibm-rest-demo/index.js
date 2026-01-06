import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

const app = express();
const PORT = 3000;

app.use(express.json());

const employeeList = [
    { id: 101, name: 'Sonu', salary: 10.50 },
    { id: 102, name: 'Monu', salary: 12.25 },
    { id: 103, name: 'Tonu', salary: 11.75 },
];

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Employee Management System API',
            version: '1.0.0',
            description: 'REST API demo with Swagger for IBM trainees',
        },
        servers: [
            {
                url: `http://localhost:${PORT}`,
            },
        ],
    },
    apis: ['./index.js'],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


/**
 * @swagger
 * /:
 *   get:
 *     summary: Welcome endpoint
 *     responses:
 *       200:
 *         description: Welcome message
 */
app.get('/', (request, response) => {
    response.send('Welcome to employee management system!');
});

/**
 * @swagger
 * /employees:
 *   get:
 *     summary: Get all employees
 *     responses:
 *       200:
 *         description: List of employees
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Employee'
 */
app.get('/employees', (request, response) => {
    response.json(employeeList);
});

/**
 * @swagger
 * /employees/{id}:
 *   get:
 *     summary: Get employee by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Employee object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Employee'
 */
app.get('/employees/:id', (request, response) => {
    const id = parseInt(request.params.id);
    const emp = employeeList.find(e => e.id === id);
    response.json(emp);
});

/**
 * @swagger
 * /employees:
 *   post:
 *     summary: Add a new employee
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Employee'
 *     responses:
 *       201:
 *         description: Employee created
 */
app.post('/employees', (request, response) => {
    const { id, name, salary } = request.body;
    const emp = { id, name, salary };
    employeeList.push(emp);
    response.status(201).json(emp);
});

/**
 * @swagger
 * components:
 *   schemas:
 *     Employee:
 *       type: object
 *       required:
 *         - id
 *         - name
 *         - salary
 *       properties:
 *         id:
 *           type: integer
 *           example: 101
 *         name:
 *           type: string
 *           example: Sonu
 *         salary:
 *           type: number
 *           example: 10.5
 */

app.listen(PORT, () => {
    console.log(`App started at: http://localhost:${PORT}`);
    console.log(`Swagger UI available at: http://localhost:${PORT}/api-docs`);
});












// import express from 'express';

// const app = express();
// const PORT = 3000;

// const employeeList = [
//     { id: 101, name: 'Sonu', salary: 10.50 },
//     { id: 102, name: 'Monu', salary: 12.25 },
//     { id: 103, name: 'Tonu', salary: 11.75 },
// ];

// app.use(express.json());

// app.get('', (request, response) => {
//     console.log('EMS');
//     response.send('Welcome to employee management system!');
// });

// app.get('/employees', (request, response) => {
//     console.log(employeeList.length);
//     response.json(employeeList);
// });

// app.get('/employees/:id', (request, response) => {
//     const id = parseInt(request.params.id);
//     console.log(id);
//     const emp = employeeList.find(e => e.id === id);
//     response.json(emp);
// });

// app.post('/employees', (request, response) => {
//     const {id, name, salary} = request.body;
//     const emp = {id, name, salary};
//     employeeList.push(emp);
//     console.log(id);
//     response.json(emp);
// });

// // app.put('/employees', () => {});

// // app.patch('/employees', () => {});

// app.listen(PORT, () => {
//     console.log(`App started at: http://localhost:${PORT}`);
// });


// // // console.log('index.js');

// // // import express from express;
// // // const app = express();
// // // const PORT = 3000;
// // // app.get();
// // // app.listen();

// // import express from 'express';

// // const app = express();
// // const PORT = 3000;

// // app.get('', (request, response) => {
// //     console.log('NodeJS');
// //     response.send('NodeJS demo');

// // });
// // app.listen(PORT, () => {
// //     console.log(`Open http://localhost:${PORT}`);
// // });



// // // /*
// // // Create a NodeJS project :
// // // On CMD -
// // // open this folder and run this -
// // // npm init -y
// // // edit package.json
// // // create index.js
// // // write code
// // // run from CMD :
// // // npm start
// // // */

// // // console.log('NodeJS Demo');

