const el_main = document.querySelector('.main');
const el_alertBox = document.querySelector('.alert');
const el_exclamationIcon = document.querySelector('.fa-exclamation-circle');
const el_msg = document.querySelector('.msg');
const el_closeBtn = document.querySelector('.close-btn');
const el_closeIcon = document.querySelector('.fa-times');


class ShowAlert {
    constructor(state, borderColor, color) {
        this.state = state;
        this.borderColor = borderColor;
        this.color = color;
    }

    trigger(message) {
        el_alertBox.style.background = this.state;
        el_alertBox.style.borderColor = this.borderColor;
        el_msg.textContent = message;
        el_msg.style.color = this.color;
        el_exclamationIcon.style.color = this.color;
        
        el_closeIcon.style.color = this.color;

        el_alertBox.classList.add('show');
        el_alertBox.classList.remove('hide');
        setTimeout(() => {
            el_alertBox.classList.remove('show');
            el_alertBox.classList.add('hide');
        }, 2500);
        start();
        el_closeBtn.addEventListener("click", () => {
            el_alertBox.classList.remove('show');
            el_alertBox.classList.add('hide');
        });
    }
}

const warning = new ShowAlert("#ffdb9b", "#ffa502", "#ce8500");
const danger = new ShowAlert('#f8d7da', "#d1281f","#721c24", );


el_main.addEventListener("click", (e)=>{
    if(e.target.classList.contains('btn-danger')){
        danger.trigger("Alert: This is a danger alert");
    }else if(e.target.classList.contains('btn-warning')){
        warning.trigger("Warning: This is a warning message!!");
    }
} );

//progressbar


function start(){
    const el_progress = document.querySelector('.progress');
    let width = 0;
    
    const interval = setInterval(fill,20);
    //divide showAlert setTimeout value by 100
    
    function fill(){
        if(width>=100){
            clearInterval(interval);
        }else{
            width++;
            el_progress.style.width = width +"%";
            // el_progress.innerHTML = width + "%";
        }
    }
    }