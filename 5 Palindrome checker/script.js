const button = document.querySelector('.btn-reset');
const modal_close_button = document.querySelector('.modal-box span');
const modal = document.querySelector('.modal');
const modal_box = document.querySelector('.modal-box');
const text_element = document.querySelector('.modal-box h2');

const closeModal = () => {
    modal_box.classList.add('slide-up-animation');
    setTimeout(()=>{
        modal_box.classList.remove('slide-up-animation');
        modal.style.display = 'none';
    },280);
}

const openModal = () => {
    modal.style.display = 'block';
}

const checkPalindrome = (str) => {

    let start = 0;
    let end = str.length -1;
    while(end>start){
        if(str[end]!==str[start]){
            return false;
        }
        start++;
        end--;
    }
    return true;
}

modal_close_button.addEventListener('click', closeModal);
modal.addEventListener('click', (e)=>{
    if(!modal_box.contains(e.target))
    closeModal();
})

button.addEventListener('click', ()=>{
    const str = document.getElementById('palindrome').value;
    if(str){
        openModal();}
    if(checkPalindrome(str)){
        text_element.textContent = "The String \""+str+"\" is a palindrome";
        modal_box.style.backgroundColor = 'green';
    }else{
        text_element.textContent = "The String \""+str+"\" is not a palindrome";
        modal_box.style.backgroundColor = 'red';
    }
});