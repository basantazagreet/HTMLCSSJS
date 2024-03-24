const el_slides = document.querySelectorAll('.slide');
const el_next = document.querySelector('.next');
const el_prev = document.querySelector('.prev');
const auto_scroll = true;
let slide_interval;
let interval_time = 3000;


const nextSlide = () => {
    const el_current = document.querySelector('.current');
    el_current.classList.remove('current');
    if(el_current.nextElementSibling){
        el_current.nextElementSibling.classList.add('current');
    }else{
        el_slides[0].classList.add('current');
    }

    //Yo kina hola?
    el_current.classList.remove('current');
}
const prevSlide = () => {
    const el_current = document.querySelector('.current');
    el_current.classList.remove('current');
    if(el_current.previousElementSibling){
        el_current.previousElementSibling.classList.add('current');
    }else{
        el_slides[el_slides.length - 1].classList.add('current');
    }

    el_current.classList.remove('current');
}

el_next.addEventListener('click', ()=>{
    nextSlide();
    if(auto_scroll){
        clearInterval(slide_interval);
        auto();
    }
});
el_prev.addEventListener('click', ()=>{
    prevSlide();
    if(auto_scroll){
        clearInterval(slide_interval);
        auto();
    }
});


// Auto scroll

if(auto_scroll){
    function auto(){
        slide_interval = setInterval(nextSlide,interval_time);
    }
}

auto();