const button = document.querySelector('.btn-reset');
const users_div = document.getElementById('users');

const getUsers = (event) => {
    event.preventDefault();
    
    const http = new XMLHttpRequest();
    
    http.open('GET', 'http://localhost:3000/user', true);
    
    http.onload = function() {
        if(this.status === 200){
            let users = JSON.parse(this.responseText);
            var output = '';
            users.forEach(user => {
                 output += `
                <ul>
                <li>${user.name}</li>
                <li>${user.email}</li>
                <li>${user.password}</li>
                </ul>
                <hr>
                `;
            });
            users_div.innerHTML = output;
        }
    }

    http.send();

    
}
button.addEventListener('click',getUsers);

