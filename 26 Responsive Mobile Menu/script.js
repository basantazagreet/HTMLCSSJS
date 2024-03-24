const el_hamburger = document.querySelector('.hamburger');
const el_close = document.querySelector('.close');
const el_nav_list = document.querySelector('.nav-list');
const el_links = document.querySelectorAll('.nav-list li a');


const openMenu = () => {
    el_hamburger.style.display = 'none';
    el_close.style.transform = 'translateY(0)';
    el_nav_list.style.transform = 'translateY(0)';
}
el_hamburger.addEventListener('click', openMenu);


const closeMenu = () => {
    el_close.style.transform = 'translateY(-20rem)';
    el_nav_list.style.transform = 'translateY(-200%)';
    el_hamburger.style.display = 'block';
}
el_close.addEventListener('click', closeMenu);

// const smoothScroll = (e) => {
//     e.preventDefault();
//     const el_href = e.target.getAttribute('href');
//     document.querySelector(el_href).scrollIntoView({
//         behavior:'smooth',
//     });
//     closeMenu();
// }

function smoothScroll(){
    console.log(this);
}


el_links.forEach((el_link)=>{
    el_link.addEventListener('click', smoothScroll);
})