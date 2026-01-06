
const restApiUrl = 'http://localhost:3000/employees';
const soapApiUrl = 'http://localhost:4000/employee';
const graphqlApiUrl = 'http://localhost:5000/graphql';

const getAllEmployeesRest = async () => {
    try {
        const response = await fetch(restApiUrl);
        const employees = await response.json();
        console.log('REST Employees:', employees);
    } catch (err) {
        console.error('REST Error:', err);
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

        const textResponse = await response.text();
        console.log('SOAP Employee (XML):', textResponse);

    } catch (err) {
        console.error('SOAP Error:', err);
    }
};


const getAllEmployeesGraphql = async () => {
    try {
        const query = {
            query: `
                query {
                    employees {
                        id
                        name
                        salary
                    }
                }
            `
        };

        const response = await fetch(graphqlApiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(query)
        });

        const result = await response.json();
        console.log('GraphQL Employees:', result.data.employees);

    } catch (err) {
        console.error('GraphQL Error:', err);
    }
};


getAllEmployeesRest();
getAllEmployeesSoap();
getAllEmployeesGraphql();


// // Parse XML to JavaScript - 

// import { parseStringPromise } from 'xml2js';

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
//             headers: { 'Content-Type': 'text/xml' },
//             body: soapRequest
//         });

//         const xmlText = await response.text();
//         const json = await parseStringPromise(xmlText);

//         const emp =
//             json['soap:Envelope']['soap:Body'][0]
//                 ['tns:getEmployeeResponse'][0];

//         console.log('SOAP Employee Parsed:', {
//             id: emp.id[0],
//             name: emp.name[0],
//             salary: emp.salary[0]
//         });

//     } catch (err) {
//         console.error('SOAP Error:', err);
//     }
// };
