const el_modal = document.getElementById("modal");
const el_input = document.getElementById("link");
const el_btn = document.getElementById("btn");
const el_close = document.getElementsByClassName("close")[0];


el_btn.addEventListener("click", openModal);
// el_close.addEventListener("click", closeModal);


function openModal(e){
    e.preventDefault();
    el_modal.style.display = "block";
    startCountdown();
}

function closeModal(e){
    // e.preventDefault();
    el_modal.style.display = "none";
}


window.onclick = function(e){
    if(e.target == modal){
        modal.style.display = "none";
    }
}


//Counter function

let reverseCounter = 10;
let el_progressBar = document.getElementById('pbar');
let counting = document.getElementById("counting");

function startCountdown(){
    let downloadTimer = setInterval(()=>{
        el_progressBar.value = 10 - (--reverseCounter);
        if(reverseCounter <= -1){
            clearInterval(downloadTimer);
            closeModal();
            window.open(el_input.value, "_blank");
        }

        counting.innerHTML = reverseCounter;
    },1000);

    let reverseCounter = 10;
}