const input_element = document.getElementById('char-count');
const count = document.getElementById('count');

//Keydown captures word after backspace is hit too
input_element.addEventListener('keydown',()=>{
    count.textContent = input_element.value.length;
});
input_element.addEventListener('')

