const el_password = document.getElementById('password');
const el_eye = document.getElementById('eye');

el_eye.addEventListener('click', ()=>{
    if(el_eye.classList.contains('fa-eye')){
        el_password.setAttribute('type', 'text');
        el_eye.classList.remove('fa-eye');
        el_eye.classList.add('fa-eye-slash');
    }else{
        el_password.setAttribute('type','password');
        el_eye.classList.remove('fa-eye-slash');
        el_eye.classList.add('fa-eye');
    }
});