console.log('forms data');

// print form data on console after submission 

const printFormData = (event, form) => {
    // event.preventDefault();
    const formData = Object.fromEntries(new FormData(form));
    console.log(formData);
};

// const printFormData = (event) => {
//     event.preventDefault();
//     const formData = {
//         name: document.getElementById("name").value,
//         username: document.getElementById("username").value,
//         email: document.getElementById("email").value,
//         phone: document.getElementById("phone").value,
//         aadhaar: document.getElementById("aadhaar").value,
//         password: document.getElementById("password").value
//     };
//     console.log(formData);
// };


