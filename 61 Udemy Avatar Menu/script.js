const el_menu = document.querySelector('.menu');
const el_avatar = document.querySelector('.avatar-profile img');


el_avatar.addEventListener('mouseover' , ()=>{
    el_menu.classList.add('active');
});
el_avatar.addEventListener('mouseout' , ()=>{
    el_menu.classList.remove('active');
});
el_menu.addEventListener('mouseover' , ()=>{
    el_menu.classList.add('active');
});
el_menu.addEventListener('mouseout' , ()=>{
    el_menu.classList.remove('active');
});