const el_slider = document.querySelector('.slider');
const el_checkbox = document.getElementById('checkbox');
const el_basic = document.querySelector('.basic');
const el_prof = document.querySelector('.prof');
const el_master = document.querySelector('.master');

el_slider.addEventListener('click' , ()=>{
    if(!el_checkbox.checked){
        [el_basic.textContent, el_prof.textContent, el_master.textContent] = 
        [99.99, 259.99, 349.99];
    }else{
        [el_basic.textContent, el_prof.textContent, el_master.textContent] = 
        [9.99, 19.99, 29.99];
    }
});