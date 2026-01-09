
const apiUrl = 'https://jsonplaceholder.typicode.com/users/';

const fetchUserData = async () => {

    const userId = document.querySelector('#userid').value;
    try {
        const response = await fetch(`${apiUrl}${userId}`);
        console.log(response);
        user = await response.json();
        console.log(user);
        document.querySelector('#username').innerText = user.username;
    }
    catch (error) {
        console.log(error);
        document.querySelector('#username').innerText = error;
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