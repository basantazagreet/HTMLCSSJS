const api = {
    key: "28fd15358cdecbc1a1dfef367e71acef",
    base: "https://api.openweathermap.org/data/2.5/"
}

const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
btn.addEventListener("click", getInput);

function getInput (event) {
    event.preventDefault();
    if (event.type == "click") {
        getData(search.value);
        console.log(search.value);
    }
}

function getData () {
    fetch(`${api.base}weather?q=${search.value}&units=metric&appid=${api.key}`)
        .then(response => {
            return response.json();
        }).then(displayData);
        
}

function getDate(){
    
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    let date = new Date();

    return `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`;
}



function displayData (response) {
    console.log(response);

    if(response.cod == 200){
        let el_city = document.querySelector('.city');
    el_city.textContent = `${response.name}, ${response.sys.country}`;

    let el_date = document.querySelector('.date');
    el_date.textContent = getDate();

    let el_temp = document.querySelector('.temp');
    el_temp.textContent = `Temp: ${response.main.temp} °C`

    let el_weather = document.querySelector('.weather');
    el_weather.textContent = `Weather: ${response.weather[0].main}`;

    let el_temp_range = document.querySelector('.temp-range');
    el_temp_range = `Temp Range: ${response.main.temp_min}°C  / ${response.main.temp_min}°C `;

    const iconURL = "http://openweathermap.org/img/w/";
    let el_icon_img = document.querySelector('.weather-icon');
    el_icon_img.setAttribute('src', `${iconURL}${response.weather[0].icon}.png`);
    el_icon_img.style.display = 'block';

    }else{
        let el_error = document.querySelector('.error');
        el_error.style.display = 'block';
    }

    

}