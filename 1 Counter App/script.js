let subtract_button = document.querySelector('.counter .button-group .btn-subtract');
let reset_button = document.querySelector('.counter .button-group .btn-reset');
let add_button = document.querySelector('.counter .button-group .btn-add');
let buttons = document.querySelector('.button-group');

let count_element = document.getElementById("count");

function setColor() {
    if (count_element.textContent == 0) {
        count_element.style.color = 'yellow';
    } else if (count_element.textContent < 0) {
        count_element.style.color = 'red';
    } else if (count_element.textContent > 0) {
        count_element.style.color = 'white';
    }
}

buttons.addEventListener("click", (e) => {
    if (e.target.classList.contains('btn-subtract')) {
        count_element.textContent--;
        setColor();
    } else if (e.target.classList.contains('btn-reset')) {

        count_element.textContent = 0;
        setColor();

    } else if (e.target.classList.contains('btn-add')) {
        count_element.textContent++;
        setColor();
    }
});




