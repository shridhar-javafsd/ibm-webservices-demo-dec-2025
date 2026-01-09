
const apiUrl = 'https://jsonplaceholder.typicode.com/users/';
let userId = 0;

const fetchUserData = async () => {

    // userId = document.getElementById('input').value; // Old JS 
    userId = document.querySelector('input').value; // ES6 JS 
    try {
        userData = await fetch(`${apiUrl}${userId}`);
        console.log(userData);
        user = await userData.json();
        console.log(user);
        document.getElementById("username").innerText = user.username;

    }
    catch (error) {
        console.log(error);
        document.getElementById("username").innerText = error;
    }

};


// // consume REST APIs

// const apiUrl = 'https://jsonplaceholder.typicode.com/users/';
// let userId = 0;

// const fetchUserData = () => {

//     // userId = document.getElementById('input').value; // Old JS
//     userId = document.querySelector('input').value; // ES6 JS

//     console.log('userId', userId);

//     fetch(`${apiUrl}${userId}`)
//         .then((response) => {
//             console.log(response);
//             return response.json()
//         })
//         .then((response) => {
//             console.log(response);
//             document.getElementById("username").innerText = response.username;
//         })
//         .catch();
// };