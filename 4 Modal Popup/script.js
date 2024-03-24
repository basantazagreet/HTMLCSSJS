const open_button = document.getElementById('open');
const modal = document.querySelector('.modal');
const close_button = document.getElementById('close');
const modal_box = document.querySelector('.box');
const el_bahira = document.querySelector('.bahira');

function closeModal() {
    modal_box.classList.add('slide-up');
    setTimeout(() => {
        modal_box.classList.remove('slide-up');
        modal.style.display = 'none';
    }, 280)
}

open_button.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'block';
});

modal.addEventListener('click', (e) => {
   //bahira click vitra click gare detected
    if(!modal_box.contains(e.target))
    closeModal();
});

close_button.addEventListener('click', () => {
    closeModal()
});
