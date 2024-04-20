const el_loginLink = document.querySelector('.login-link');
const el_registerLink = document.querySelector('.register-link');
const el_forgotLink = document.querySelector('.forgot-link');

const el_loginSection = document.querySelector('.login');
const el_registerSection = document.querySelector('.register');
const el_forgotSection = document.querySelector('.forgot');
const el_close = document.querySelector('.close');

el_registerLink.addEventListener('click', (e) => {
    el_loginSection.style.display = "none";
    el_registerSection.style.display = "flex";
});
el_loginLink.addEventListener('click', (e) => {
    el_registerSection.style.display = "none";
    el_loginSection.style.display = "flex";
});
el_forgotLink.addEventListener('click', (e) => {
    el_loginSection.style.display = "none";
    el_registerSection.style.display = "none";
    el_forgotSection.style.display = "flex";
});


el_close.addEventListener('click', ()=>{
    el_forgotSection.style.display = "none";
    el_loginSection.style.display = "flex";
});