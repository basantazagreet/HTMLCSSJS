const button = document.querySelector('.btn-reset');
const users_div = document.getElementById('users');


const getUsers = (event) => {

    event.preventDefault();

    fetch('http://localhost:3000/user')
        .then((response) => {
            return response.json();
        })
        .then((users) => {
            console.log(users);
            let output = '';
            users.forEach(user => {
                output += `
            <ul>
            <li>${user.name}</li>
            <li>${user.email}</li>
            <li>${user.password}</li>
            </ul>
            <hr>
            `
            });

            users_div.innerHTML = output;
        })



}
button.addEventListener('click', getUsers);

