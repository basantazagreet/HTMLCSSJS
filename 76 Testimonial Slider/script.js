const el_next = document.querySelector(".next");
const el_prev = document.querySelector(".prev");
const el_slides = document.querySelectorAll(".slide");
let index = 0;

function displaySlide(index){
    el_slides.forEach(slide => {
       slide.style.display = "none"; 
    });
    el_slides[index].style.display = "flex";
}

function nextSlide(){
    index++;
    if(index > el_slides.length - 1){
        index = 0;
    }
    displaySlide(index);
}
function prevSlide(){
    index--;
    if(index < 0){
        index = el_slides.length - 1;
    }
    displaySlide(index);
}

el_next.addEventListener("click", nextSlide);
el_prev.addEventListener("click", prevSlide);
displaySlide(0);