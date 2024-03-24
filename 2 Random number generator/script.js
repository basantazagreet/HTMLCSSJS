

const count = document.getElementById('count');


const getRandomNumber = () => {
    return Math.floor(Math.random() * 1000) + 1;
}

count.textContent = getRandomNumber();


const button = document.querySelector('.btn-reset');
button.addEventListener('click', () => {
    count.textContent = getRandomNumber();
});