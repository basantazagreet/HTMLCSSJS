const el_timer = document.querySelector('.time');
const el_start = document.querySelector('.start');
const el_pause = document.querySelector('.pause');
const el_reset = document.querySelector('.reset');

let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let t = null;

el_start.addEventListener('click', startTimer);
el_pause.addEventListener('click', pauseTimer);
el_reset.addEventListener('click', resetTimer);

function startTimer() {
    if (t !== null) {
        clearInterval(t);
    }
    t = setInterval(displayTime, 10);
}


function pauseTimer() {
    clearInterval(t);
}

function resetTimer() {
    clearInterval(t);
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    el_timer.innerHTML = "00 : 00 : 00 : 000";
}

function displayTime() {
    milliseconds += 10;
    if (milliseconds == 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds == 60) {
            seconds =0;
            minutes++;
            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }
    }


    let h = hours < 10 ? "0"+hours : hours ;
    let m = minutes < 10 ? "0"+minutes : minutes ;
    let s = seconds < 10 ? "0"+seconds : seconds ;
    let ms = milliseconds < 10 
    ? "00"+milliseconds 
    : milliseconds < 100 
    ? "0" +milliseconds
    : milliseconds ;

    el_timer.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
    
    

}