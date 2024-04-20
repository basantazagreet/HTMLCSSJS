// Your JavaScript code here
const el_password = document.getElementById("password");
const el_passwordStrength = document.getElementById('password-strength');
const el_lowUpperCase = document.querySelector('.low-upper-case i');
const el_number = document.querySelector('.number i');
const el_specialChar = document.querySelector('.special-char i');
const el_eightChar = document.querySelector('.eight-char i');
const el_showPassword = document.querySelector('.show-pass');
const el_eye = document.querySelector('#eye');
let state;


el_showPassword.addEventListener('click', toggle);
el_eye.addEventListener('click', toggleEye);
el_password.addEventListener('keyup', () => {
    let pass = el_password.value;
    checkStrength(pass);
});

//Toggle password visibility
function toggle() {
    if (state) {
        el_password.setAttribute('type', 'password');
        state = false;
    } else {
        el_password.setAttribute('type', 'text');
        state = true;
    }
}

//Toggle icon in password field

function toggleEye() {
    el_eye.classList.toggle('fa-eye-slash');
}

//Check password strength
function checkStrength(password) {
    let strength = 0;


    //check lower and uppercase
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
        strength += 1;
        addCheck(el_lowUpperCase);
    } else {
        removeCheck(el_lowUpperCase);
    }


    //check for numbers
    if (password.match(/([0-9])/)) {
        strength += 1;
        addCheck(el_number);
    } else {
        removeCheck(el_number);
    }
    //check for special characters
    if (password.match(/([$&+,:;=?@#|'<>.^*()%!-])/)) {
        strength += 1;
        addCheck(el_specialChar);
    } else {
        removeCheck(el_specialChar);
    }

    //Check if Length is greater than 7 
    if (password.length > 7) {
        strength += 1;
        addCheck(el_eightChar);
    } else {
        removeCheck(el_eightChar);
    }


    //Update progressbar
    if (strength == 1) {
        removePassStrength();
        el_passwordStrength.classList.add('pb-danger');
        el_passwordStrength.style = "width: 25%";
    } else if (strength == 2) {
        removePassStrength();
        el_passwordStrength.classList.add('pb-warning');
        el_passwordStrength.style = "width: 50%";
    }
    else if (strength == 3) {
       removePassStrength();
        el_passwordStrength.classList.add('pb-primary');
        el_passwordStrength.style = "width: 75%";
    }
    else if (strength == 4) {
        removePassStrength();
        el_passwordStrength.classList.add('pb-success');
        el_passwordStrength.style = "width: 100%";
    }


}

function removePassStrength() {
    el_passwordStrength.classList.remove('pb-warning', 'pb-primary',
        'pb-success', 'pb-danger');
}


//Add check icon

function addCheck(charRequired) {
    charRequired.classList.remove('fa-circle');
    charRequired.classList.add('fa-check');
}

//Remove check icon
function removeCheck(charRequired) {
    charRequired.classList.add('fa-circle');
    charRequired.classList.remove('fa-check');
}



