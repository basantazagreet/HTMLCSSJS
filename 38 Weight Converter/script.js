/*
Conversion formula
// -- From pounds to --
// kilograms = x / 2.2046;
// grams = x / 0.0022046;
// ounces = x * 16;

// -- From Kilogram to --
// pounds = x * 2.2046;
// grams = x * 1000;
// ounces = x * 35.274;

// -- From Gram to --
// kilograms = x / 1000;
//   pounds = x * 0.0022046;
//   ounces = x * 0.035274;

// -- From Ounce to --
// kilograms = x / 35.274;
// grams = x / 0.035274;
// pounds = x * 0.0625;
*/
let el_pounds = document.querySelector('.pounds');
let el_kilograms = document.querySelector('.kilograms');
let el_grams = document.querySelector('.grams');
let el_ounces = document.querySelector('.ounces');
let el_form = document.querySelector('form');
el_form.addEventListener('input', convertWeight);

function convertWeight(e) {
    if (e.target.classList.contains('pounds')) {
        let x = e.target.value;
        el_kilograms.value = (x / 2.2046).toFixed(2);
        el_grams.value = (x / 0.0022046).toFixed(2);
        el_ounces.value = (x * 16).toFixed(2);
    }
    if (e.target.classList.contains('kilograms')) {
        let x = e.target.value;
        el_pounds.value = (x * 2.2046).toFixed(2);
        el_grams.value = (x * 1000).toFixed(2);
        el_ounces.value = (x * 35.274).toFixed(2);
    }
    if (e.target.classList.contains('grams')) {
        let x = e.target.value;
        el_kilograms.value = (x / 1000).toFixed(2);
        el_pounds.value = (x * 0.0022046).toFixed(2);
        el_ounces.value = (x * 0.035274).toFixed(2);
    }
    if (e.target.classList.contains('ounces')) {
        let x = e.target.value;
        el_kilograms.value = (x / 35.274).toFixed(2);
        el_grams.value = (x / 0.035274).toFixed(2);
        el_pounds.value = (x * 0.0625).toFixed(2);
    }
}