const el_thumbnails = document.getElementsByClassName('thumbnail');
const el_slider = document.getElementById('slider');
const el_next = document.getElementById('slide-right');
const el_prev = document.getElementById('slide-left');


el_next.addEventListener('click', ()=>{
    let scroll_amount = 0;
    let slide_timer = setInterval(()=>{
        el_slider.scrollLeft += 10;
        scroll_amount += 10;
        if(scroll_amount>=100){
            window.clearInterval(slide_timer);
        }
    }, 25);
});
el_prev.addEventListener('click', ()=>{
    let scroll_amount = 0;
    let slide_timer = setInterval(()=>{
        el_slider.scrollLeft -= 10;
        scroll_amount += 10;
        if(scroll_amount>=100){
            window.clearInterval(slide_timer);
        }
    }, 25);
});


//Auto play function

function autoPlay(){
    if(el_slider.scrollLeft >= (el_slider.scrollWidth - el_slider.clientWidth -1)){
        el_slider.scrollLeft = 0;
    }else{
        el_slider.scrollLeft += 1;       
    }
}

let play = setInterval(autoPlay, 10);


//Pause the slide on hover

for(let i=0; i<el_thumbnails.length; i++){
    el_thumbnails[i].addEventListener('mouseover',()=>{
        clearInterval(play);
    });
    el_thumbnails[i].addEventListener('mouseout',()=>{
       return (play = setInterval(autoPlay, 10));
    });
}
