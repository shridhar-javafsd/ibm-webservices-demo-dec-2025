import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';

const app = express();

const schema = buildSchema(`

  type Department {
    id: Int
    name: String
  }

  type Employee {
    id: Int
    name: String
    salary: Int
    department: Department
  }

  type Query {
    employee(id: Int): Employee
    employees: [Employee]
  }
`);

const employees = [
  { id: 101, name: "Sonu", salary: 60000, departmentId: 1 },
  { id: 102, name: "Monu", salary: 70000, departmentId: 2 }
];

const departments = [
  { id: 1, name: "IT" },
  { id: 2, name: "HR" }
];

const root = {

  // get employee by id 
  employee: ({ id }) => {
    const emp = employees.find(e => e.id === id);
    if (!emp) return null;

    return {
      ...emp,
      department: departments.find(d => d.id === emp.departmentId)
    };
  },

  // get all employees 
  employees: () => {
    return employees.map(emp => ({
      ...emp,
      department: departments.find(d => d.id === emp.departmentId)
    }));
  }
};

// starting point for a request 
app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true
}));

// starting point of the app server 
app.listen(4000, () => {
  console.log("Graph API running at http://localhost:4000/graphql");
});


// get employee by id - 
// { "query": "{ employee(id: 102) { name salary department { name } } }" }
// get all employees
// { "query": "{ employees { name salary department { name } } }" }






// import express from 'express';
// import {graphqlHTTP} from 'express-graphql';
// import { buildSchema } from 'graphql';

// const app = express();

// const schema = buildSchema(`

//   type Department {
//     id: Int
//     name: String
//   }

//   type Employee {
//     id: Int
//     name: String
//     salary: Int
//     department: Department
//   }

//   type Query {
//     employee(id: Int): Employee
//   }
// `);


// const employees = [
//     { id: 101, name: "Sonu", salary: 60000, departmentId: 1 },
//     { id: 102, name: "Monu", salary: 70000, departmentId: 2 }
// ];

// const departments = [
//     { id: 1, name: "IT" },
//     { id: 2, name: "HR" }
// ];


// const root = {
//     employee: ({ id }) => {
//         const emp = employees.find(e => e.id === id);
//         if (!emp) return null;

//         return {
//             ...emp,
//             department: departments.find(d => d.id === emp.departmentId)
//         };
//     }
// };

// app.use('/employees', graphqlHTTP({
//     schema,
//     rootValue: root,
//     graphiql: true   
// }));

// app.listen(4000, () => {
//     console.log("Graph API running at http://localhost:4000/employees");
// });


// // POST Request to http://localhost:4000/employees - 

// // {
//   // "query": "{ employee(id: 101) { name salary department { name } } }"
// // }

