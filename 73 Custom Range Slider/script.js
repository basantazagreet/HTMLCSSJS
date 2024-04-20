const el_rangeSlider = document.querySelector('input');
const el_value = document.querySelector('.value');
el_value.textContent = el_rangeSlider.value;


el_rangeSlider.oninput = function () {
    el_value.textContent = this.value;
};