const ucase = "ABCDEFGHIJKLMNOPQRSTUVWX";
const lcase = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const symbol = "!@#$%^&*(){}[]:;'.,"

const el_length = document.getElementById('p-length');
const el_uppercase = document.getElementById('p-uppercase');
const el_lowercase = document.getElementById('p-lowercase');
const el_number = document.getElementById('p-number');
const el_symbol = document.getElementById('p-symbol');
const el_submit = document.getElementById('submit');
const el_password = document.getElementById('password');
const el_copy = document.getElementById('copy');

el_submit.addEventListener('click', ()=>{
    let initial_password = "";
    el_uppercase.checked? initial_password += ucase: "";
    el_lowercase.checked? initial_password += lcase: "";
    el_number.checked? initial_password += number: "";
    el_symbol.checked? initial_password += symbol: "";

    el_password.value = generatePassword(el_length.value, initial_password);
});

function generatePassword(len, init_pass){
    let password = "";
    for(let i=0; i<len; i++){
        password += init_pass.charAt(
            Math.floor(Math.random()*init_pass.length)
        );
    }
    return password;
}

el_copy.addEventListener('click', ()=>{
    if(el_password.value == ""){
        alert('Please generate password first');
    }else{
        navigator.clipboard.writeText(el_password.value);
    }
});