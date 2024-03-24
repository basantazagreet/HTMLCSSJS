const el_links = document.querySelectorAll(".nav-list li a");
const el_nav_list = document.querySelector('.nav-list');

const el_top_button = document.querySelector('.top');
const el_root = document.documentElement;

el_links.forEach((el_link) => {
    el_link.addEventListener('click', setSmooth);
})

function setSmooth(e) {
    e.preventDefault();
    el_nav_list.querySelector('.active').classList.remove('active');
    e.target.parentElement.classList.add('active');
    //Arrow function ma this refers to window
    const href = this.getAttribute('href');
    //#two lai select garyo.
    document.querySelector(href).scrollIntoView({
        behavior: "smooth",
    });
    
}

//Sticky class add gareko
window.addEventListener('scroll', ()=>{
    const el_header = document.querySelector('header');
    el_header.classList.toggle('sticky', window.scrollY > 0);
})

document.addEventListener('scroll', ()=>{
    // Calculate the total scrollable height scrollheight vaneko total, clientheight
    //total - visible
    const scroll_total = el_root.scrollHeight - el_root.clientHeight;

    // Check if the scroll position is more than 30% of the total scrollable height
    //scrollTop means vertically kati scroll vayo.
    if(el_root.scrollTop/scroll_total>0.3){
        el_top_button.classList.add('show-btn');
    }else{
        el_top_button.classList.remove('show-btn');
    }
});

el_top_button.addEventListener('click',()=>{
    el_root.scrollTo({
        top:0,
        behavior: "smooth"
    })
});
