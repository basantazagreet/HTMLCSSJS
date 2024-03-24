el_countdown = document.getElementById('countdown');
let time = 10;
let time_in_secs = 10*60;

const countdown = setInterval(() => {
   if(time_in_secs<=0){
    clearInterval(countdown);
    el_countdown.textContent= "Timer expired";
   }else{

    let minutes = Math.floor(time_in_secs/60);
    let seconds = Math.floor(time_in_secs%60);
    el_countdown.textContent = `${format(minutes)} : ${format(seconds)}`;
    time_in_secs--;

   }
}, 1000);

function format(t){
    return t<10? `0${t}`: t;
}

