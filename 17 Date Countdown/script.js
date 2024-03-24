el_countdown = document.getElementById('countdown');


const countdown = setInterval(() => {
    let end_date = new Date('2024-02-28');
    let current_date = new Date();

    let time_in_secs = (end_date - current_date) / 1000;

    if(end_date - current_date <= 0){
        clearInterval(countdown);
        el_countdown.textContent = "Completed"
    }

    let days = Math.floor(time_in_secs / (3600 * 24));
    let hours = Math.floor((time_in_secs / 3600) % 24);
    let minutes = Math.floor((time_in_secs / 60) % 60);
    let seconds = Math.floor((time_in_secs % 60));


    el_countdown.textContent = `${days} Days: ${formatDigits(hours)} Hours : ${formatDigits(minutes)} Minutes: ${formatDigits(seconds)} Seconds`;

}, 1000);

function formatDigits(t){
    return t<10? `0${t}`: t;
}
