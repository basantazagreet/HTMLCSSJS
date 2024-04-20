const el_toggleDarkMode = document.querySelector('.toggle-darkmode');
const el_toggleText = document.querySelector('.toggle-text');

let darkMode = localStorage.getItem('darkMode');

const enableDarkMode = () => {
    document.body.classList.add('darkmode');
    el_toggleText.textContent = "Light";
    localStorage.setItem('darkMode', 'enabled');
}
const disableDarkMode = () => {
    document.body.classList.remove('darkmode');
    el_toggleText.textContent = "Dark";
    localStorage.setItem('darkMode', null);
}

if(darkMode === "enabled"){
    enableDarkMode();
}

el_toggleDarkMode.addEventListener('click', ()=> {
    let darkMode = localStorage.getItem('darkMode');

    if(darkMode !== "enabled"){
        enableDarkMode();
    }else{
        disableDarkMode();
    }
});

