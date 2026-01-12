
const apiUrl = "https://jsonplaceholder.typicode.com/users/2";

// option 1
// fetch().then().then().catch()

fetch(apiUrl)
    .then(resp => resp.json())
    .then(resp => console.log(resp))
    .catch(err => console.error(err));

// option 1

// async await 

const consumeApi = async () => {
    try {
        const data = await fetch(apiUrl);
        const user = await data.json();
        console.log(user);
    }
    catch (error) {
        console.error(error);
    }

};
consumeApi();

// 

// function that returns promise object - 

const user = {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    address: {
        street: 'Victor Plains',
        suite: 'Suite 879',
        city: 'Wisokyburgh',
        zipcode: '90566-7771',
        geo: { lat: '-43.9509', lng: '-34.4618' }
    },
    phone: '010-692-6593 x09125',
    website: 'anastasia.net',
    company: {
        name: 'Deckow-Crist',
        catchPhrase: 'Proactive didactic contingency',
        bs: 'synergize scalable supply-chains'
    }
};

const provideUserData = () => {

    const haveData = true;


    return new Promise((res, rej) => {
        if (haveData)
            res(user);
        else
            rej({ message: 'Error occured!' })
    });
};