# SOAP Web Service – Employee Demo (Node.js)

The service exposes a single operation:

- `getEmployee` – Fetch employee details by employee ID

## Project Structure

```
ibm-soap-demo/
├── index.js
├── employee.wsdl
├── package.json
└── README.md
```

---

## Start the SOAP Web Service

Install dependencies:

```bash
npm install
```

Start the server:

```bash
npm start
```

The SOAP service will start at:

```
http://localhost:3000/employee
```

The WSDL will be available at:

```
http://localhost:3000/employee?wsdl
```

---

## Testing the SOAP Web Service Using Postman

### 1. Create a New Request
- Open **Postman**
- Click **New → HTTP Request**

### 2. Configure Request
- **HTTP Method:** `POST`
- **URL:**
  ```
  http://localhost:3000/employee
  ```

### 3. Configure Request Body
- Go to **Body**
- Select **raw**
- Choose **XML** from the dropdown

Paste the following SOAP request:

```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
                  xmlns:emp="http://example.com/employee">
   <soapenv:Header/>
   <soapenv:Body>
      <emp:getEmployeeRequest>
         <emp:id>102</emp:id>
      </emp:getEmployeeRequest>
   </soapenv:Body>
</soapenv:Envelope>
```

---

### 4. Send the Request
Click **Send**.

---

## Expected Response

If the employee exists, the service will return a SOAP response similar to the following:

```xml
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"
               xmlns:tns="http://example.com/employee">
   <soap:Body>
      <tns:getEmployeeResponse>
         <id>101</id>
         <name>Sonu</name>
         <salary>10.5</salary>
      </tns:getEmployeeResponse>
   </soap:Body>
</soap:Envelope>
```

---

## Important Notes

- SOAP services **always use POST**, even for read operations.
- The `?wsdl` URL is **only for viewing the contract**, not for sending requests.
- SOAP uses **XML**, not JSON.
- Request and response structures must strictly match the WSDL contract.

---

