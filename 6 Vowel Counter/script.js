const button = document.querySelector('.btn-reset');
const modal_close_button = document.querySelector('.modal-box span');
const modal = document.querySelector('.modal');
const modal_box = document.querySelector('.modal-box');
const text_element = document.querySelector('.modal-box h2');

const closeModal = () => {
    modal_box.classList.add('slide-up-animation');
    setTimeout(() => {
        modal_box.classList.remove('slide-up-animation');
        modal.style.display = 'none';
    }, 280);
}

const openModal = () => {
    modal.style.display = 'block';
}

modal_close_button.addEventListener('click', closeModal);
modal.addEventListener('click', closeModal)

//Logic goes here
const countVowels = (str) => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i].match(/([a,e,i,o,u])/)){
            count++;
        }
    }
    return count;

}

button.addEventListener('click', () => {
    const str = document.getElementById('vowel-count').value;
    if (str) {
        openModal();
    }
    let count = countVowels(str);
    text_element.textContent = `The word "${str}" has ${count} vowels.`
});