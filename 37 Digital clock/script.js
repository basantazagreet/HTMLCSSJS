let el_date = document.querySelector('.date');
let el_time = document.querySelector('.time');

const returnDate = ()=> {
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

let d = new Date();
let day = days[d.getDay()];
let month = months[d.getMonth()];

return `${day}, ${d.getDate()} ${month} ${d.getFullYear()}`;
}

el_date.textContent = returnDate();


const showTime = () => {
    setInterval(()=>{
        let d= new Date();
        let hrs = d.getHours();
        let session = 'AM';

        if(hrs == 0){
            hrs = 12;
        }
        if(hrs>12){
            hrs = hrs-12;
            session = 'PM';
        }
        el_time.textContent = `${format(hrs)}: ${format(d.getMinutes())}: ${format(d.getSeconds())} ${session}`;
    },1000);
}

function format(t){
    return t<10? `0${t}`: t;
}
showTime();

