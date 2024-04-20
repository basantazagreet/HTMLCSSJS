const el_form = document.getElementById('form');
const el_username = document.getElementById('username');
const el_email = document.getElementById('email');
const el_password = document.getElementById('password');
const el_password2 = document.getElementById('password2');


//Form event listener

el_form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkRequired([el_email, el_password, el_username, el_password2]);
    checkLength(el_username,6,16);
    checkLength(el_password,8,16);
    checkEmail(el_email);
    matchPassword(el_password,el_password2);
});

function checkRequired(inputAll) {
    inputAll.forEach((input) => {
        if (input.value.trim() === "") {
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
    });
}

//check input length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be atleast ${min} characters.`);

    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters.`);
    }else{
        showSuccess(input);
    }
}




function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerText = message;
}


function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}


function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


function checkEmail(input){
    const re =   /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(re.test(input.value.trim())){
        showSuccess(input);
    }else{
        showError(input, "Email is not valid");
    }
}


function matchPassword(input1, input2){
    if(input1.value !== input2.value){
        showError(input2, "Passwords donot match");
    }
}

