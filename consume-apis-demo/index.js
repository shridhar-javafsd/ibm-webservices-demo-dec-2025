const restApiUrl = '';
const soapApiUrl = '';
const 

const getAllEmployeesRest = async () => {
    try {
        const response = await fetch('http://localhost:3000/employees');
        const employees = await response.json();
        console.log(employees);
    } catch (err) {
        console.error(err);
    }
};

fetch();

