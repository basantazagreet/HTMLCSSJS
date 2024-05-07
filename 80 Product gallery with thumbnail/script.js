const el_imgLarge = document.getElementById("large-img");
const el_smallImages = document.querySelectorAll(".img-small img");
const el_imgSmallDiv = document.querySelector('.img-small');
const el_prev = document.getElementById('btn-left');
const el_next = document.getElementById('btn-right');

el_smallImages.forEach((image) => {
    image.addEventListener("click" , (e)=>{
        let src = e.target.getAttribute('src');
        el_imgLarge.src = src;
    });
});

el_next.addEventListener("mousedown", ()=>{
    let val =0;
    let slider_timer = setInterval(()=>{
        if(val>100){
            window.clearInterval(slider_timer);
            val =0;
        }
        el_imgSmallDiv.scrollLeft += 10;
        val +=10;
    }, 100);
});

el_prev.addEventListener("mousedown" , ()=>{
    let current = 100;

    let timer = setInterval(()=>{
        current -= 10;
        el_imgSmallDiv.scrollLeft -= 10;

        if(current <=0){
            window.clearInterval(timer);
            current = 100;
        }
    },100);
})




