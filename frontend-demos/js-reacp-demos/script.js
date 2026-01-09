
// consume REST APIs 

const apiUrl = 'https://jsonplaceholder.typicode.com/users/';
let userId = 0;

const fetchUserData = () => {
    userId = document.getElementById('input').value;
    console.log('userId', userId);

    fetch(`${apiUrl}${userId}`)
        .then((response) => {
            console.log(response);
            return response.json()
        })
        .then((response) => {
            console.log(response);
            document.getElementById("username").innerText = response.username;
        })
        .catch();
};