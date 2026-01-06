
const restApiUrl = 'http://localhost:3000/employees';
const soapApiUrl = 'http://localhost:4000/employee';
const graphqlApiUrl = 'http://localhost:5000/graphql';

const getAllEmployeesRest = async () => {
    try {
        const response = await fetch('http://localhost:3000/employees');
        const employees = await response.json();
        console.log(employees);
    } catch (err) {
        console.error(err);
    }
};

const getAllEmployeesSoap = async () => {

    try {
        const soapRequest = `
            <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
                              xmlns:emp="http://example.com/employee">
               <soapenv:Header/>
               <soapenv:Body>
                  <emp:getEmployeeRequest>
                     <emp:id>101</emp:id>
                  </emp:getEmployeeRequest>
               </soapenv:Body>
            </soapenv:Envelope>
        `;
        const response = await fetch(soapApiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'text/xml'
            },
            body: soapRequest
        });
        const employees = await response.text();
        console.log(employees);

    }
    catch (err) {
        console.error(err);
    }

};


const getAllEmployeesGraphql = async () => {


};

getAllEmployeesRest();
getAllEmployeesSoap();
getAllEmployeesGraphql();































// const restApiUrl = 'http://localhost:3000/employees';
// const soapApiUrl = 'http://localhost:4000/employee';
// const graphqlApiUrl = 'http://localhost:5000/graphql';

// const getAllEmployeesRest = async () => {
//     try {
//         const response = await fetch(restApiUrl);
//         const employees = await response.json();
//         console.log('REST Employees:', employees);
//     } catch (err) {
//         console.error('REST Error:', err);
//     }
// };

// const getAllEmployeesSoap = async () => {
//     try {
//         const soapRequest = `
//             <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
//                               xmlns:emp="http://example.com/employee">
//                <soapenv:Header/>
//                <soapenv:Body>
//                   <emp:getEmployeeRequest>
//                      <emp:id>101</emp:id>
//                   </emp:getEmployeeRequest>
//                </soapenv:Body>
//             </soapenv:Envelope>
//         `;

//         const response = await fetch(soapApiUrl, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'text/xml'
//             },
//             body: soapRequest
//         });

//         const textResponse = await response.text();
//         console.log('SOAP Employee (XML):', textResponse);

//     } catch (err) {
//         console.error('SOAP Error:', err);
//     }
// };


// const getAllEmployeesGraphql = async () => {
//     try {
//         const query = {
//             query: `
//                 query {
//                     employees {
//                         id
//                         name
//                         salary
//                     }
//                 }
//             `
//         };

//         const response = await fetch(graphqlApiUrl, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(query)
//         });

//         const result = await response.json();
//         console.log('GraphQL Employees:', result.data.employees);

//     } catch (err) {
//         console.error('GraphQL Error:', err);
//     }
// };


// getAllEmployeesRest();
// getAllEmployeesSoap();
// getAllEmployeesGraphql();
