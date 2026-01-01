import express from 'express';
import soap from 'soap';
import fs from 'fs';

const app = express();
const PORT = 3000;

const employees = [
    { id: 101, name: 'Sonu', salary: 10.50 },
    { id: 102, name: 'Monu', salary: 12.25 },
    { id: 103, name: 'Tonu', salary: 11.75 }
];

const service = {
    EmployeeService: {
        EmployeePort: {
            getEmployee(args) {
                const id = args.id;
                console.log('SOAP Request for ID:', id);

                const emp = employees.find(e => e.id === id);

                return emp || { id: 0, name: 'Not Found', salary: 0.0 };
            }
        }
    }
};

const wsdl = fs.readFileSync('./employee.wsdl', 'utf8');

const server = app.listen(PORT, () => {
    console.log(`SOAP service running at http://localhost:${PORT}/employee?wsdl`);
});

soap.listen(server, '/employee', service, wsdl);

