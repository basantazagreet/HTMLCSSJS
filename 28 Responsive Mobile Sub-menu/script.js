// smooth scroll
const el_links = document.querySelectorAll('.nav-list li a');
const smoothScroll = (e) => {
    e.preventDefault();
    const el_href = e.target.getAttribute('href');
    document.querySelector(el_href).scrollIntoView({
        behavior: 'smooth',
    });
    closeMenu();
}

el_links.forEach((el_link) => {
    el_link.addEventListener('click', smoothScroll);
})

// Menu related
const el_hamburger = document.querySelector('.hamburger');
const el_close = document.querySelector('.close');
const el_nav_list = document.querySelector('.nav-list');

const el_nav_wrapper = document.querySelector('.nav-wrapper');

const openMenu = () => {
    el_hamburger.style.display = 'none';
    el_close.style.transform = 'translateY(0)';
    el_nav_wrapper.style.transform = 'translateX(0)';
    el_nav_list.style.transform = 'translateX(0)';
}
el_hamburger.addEventListener('click', openMenu);


const closeMenu = () => {
    el_close.style.transform = 'translateY(-20rem)';
    el_hamburger.style.display = 'block';
    el_nav_wrapper.style.transform = 'translateX(-200%)';
    el_nav_list.style.transform = 'translateX(200%)';
    el_submenu.style.transform = 'translateX(-100%)';

}
el_close.addEventListener('click', closeMenu);

el_nav_wrapper.addEventListener('click', closeMenu);


//Submenu related
const el_submenu = document.querySelector('.nav-list.submenu-three');
const el_three = document.querySelector('.three');
const el_back = document.querySelector('.back');


el_three.addEventListener('click', ()=>{
    el_nav_list.style.transform = 'translateX(-200%)';
    el_submenu.style.transform = 'translateX(0)';
    el_nav_wrapper.style.transform = 'translateX(0)';
});

el_back.addEventListener('click', ()=>{
    el_nav_list.style.transform = 'translateX(0)';
    el_submenu.style.transform = 'translateX(-200%)';
});