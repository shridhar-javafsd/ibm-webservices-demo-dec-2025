import express from 'express';
import {graphqlHTTP} from 'express-graphql';
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
    employee: ({ id }) => {
        const emp = employees.find(e => e.id === id);
        if (!emp) return null;

        return {
            ...emp,
            department: departments.find(d => d.id === emp.departmentId)
        };
    }
};

app.use('/employees', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true   
}));

app.listen(4000, () => {
    console.log("Graph API running at http://localhost:4000/employees");
});


// POST Request to http://localhost:4000/employees - 

// {
  // "query": "{ employee(id: 101) { name salary department { name } } }"
// }

