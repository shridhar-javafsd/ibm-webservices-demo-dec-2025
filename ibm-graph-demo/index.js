// run - 
// npm install --legacy-peer-deps
// npm start 

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
    employee(id: Int): Employee!
    employees: [Employee!]!
  }

    type Mutation {
        addEmployee(id : Int!, name: String!, departmentId : Int!) : Employee!

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
  },

  // add Employee 
  addEmployee: ({ id, name, departmentId }) => {
    const emp = { id, name, departmentId };
    employees.push(emp);

    return {
      ...emp,
      department: departments.find(d => d.id === departmentId)
    };
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
// get all employees -
// { "query": "{ employees { name salary department { name } } }" }
// add employee -
// { "query": "mutation { addEmployee(id:104, name:\"Ponu\", departmentId:2) { id name department { name } } }" }

// errors -
// String cannot represent a non string value:
// Unknown argument \"salary\" on field \"Mutation.addEmployee\".",
// "Field \"addEmployee\" argument \"id\" of type \"Int!\" is required, but it was not provided.",



