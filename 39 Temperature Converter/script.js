// --Convert Celsius to--
// fah = (x * 1.8) + 32;
// kelvin = x + 273.15;

// -- Convert Fah to --
// celsius = (x - 32) / 1.8;
// kelvin = (x - 32) / 1.8 + 273.15;

// -- Conver Kelvin to --
// fah = (x - 273.15) * 1.8 + 32;
// celsius = parseFloat(x) - 273.15;

let el_celsius = document.querySelector('.celsius')
let el_farenheit = document.querySelector('.farenheit')
let el_kelvin = document.querySelector('.kelvin')
let el_form = document.querySelector('form');

const convertTemperature = (e) => {
    if (e.target.classList.contains('celsius')) {
        let x = parseFloat(e.target.value);
        el_farenheit.value = ((x * 1.8) + 32).toFixed(2);
        el_kelvin.value = (x + 273.15).toFixed(2);
    }
    if (e.target.classList.contains('farenheit')) {
        let x = parseFloat(e.target.value);
        el_celsius.value = ((x - 32) / 1.8).toFixed(2);
        el_kelvin.value = ((x - 32) / 1.8 + 273.15).toFixed(2);
    }
    if (e.target.classList.contains('kelvin')) {
        let x = parseFloat(e.target.value);
        el_farenheit.value = ((x - 273.15) * 1.8 + 32).toFixed(2);
        el_celsius.value = (parseFloat(x) - 273.15).toFixed(2);
    }
}

el_form.addEventListener('input', convertTemperature);