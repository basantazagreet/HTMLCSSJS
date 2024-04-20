window.onload = () => start();


function start(){
const el_progress = document.querySelector('.progress');
let width = 0;

const interval = setInterval(fill,20);

function fill(){
    if(width>=100){
        clearInterval(interval);
    }else{
        width++;
        el_progress.style.width = width +"%";
        el_progress.innerHTML = width + "%";
    }
}
}