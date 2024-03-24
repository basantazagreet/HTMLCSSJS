window.localStorage.setItem('first_name','Basanta');
window.localStorage.setItem('last_name','Sapkota');

const person = {
    fullName: "Basanta Sapkota",
    location: "Gaindakot, Nepal"
};

localStorage.setItem('user', JSON.stringify(person));

const fruits = ['Banana', 'Pineapple', 'Mango'];

localStorage.setItem('fruits', JSON.stringify(fruits));

console.log(localStorage.getItem('first_name'));

localStorage.removeItem('fruits');

console.log(localStorage.key(1));