const color = document.getElementById('color');
const box = document.querySelector('.box');
const button = document.querySelector('.btn-reset');
const body = document.querySelector('body');
const el_body_color = document.querySelector('.body-color');


const getComplementaryColor = (hexColor) => {
    // Parse the hex color to RGB components
    var r = parseInt(hexColor.substring(0, 2), 16);
    var g = parseInt(hexColor.substring(2, 4), 16);
    var b = parseInt(hexColor.substring(4, 6), 16);

    // Calculate the complementary color by inverting each RGB component
    var complementaryR = 255 - r;
    var complementaryG = 255 - g;
    var complementaryB = 255 - b;

    // Convert the complementary RGB components back to hex
    var complementaryHex =
    //slice(-2) takes the last two characters from the result
        '#' +
        ('0' + complementaryR.toString(16)).slice(-2) +
        ('0' + complementaryG.toString(16)).slice(-2) +
        ('0' + complementaryB.toString(16)).slice(-2);

    return complementaryHex;
}


const setRandomHexColor = () => {
    //hex ma convert gareko tyo decimal int lai
    const hex = Math.floor(Math.random() * 16777215).toString(16);
    color.textContent = '#' + hex;
    box.style.backgroundColor = '#' + hex;
    body.style.backgroundColor = getComplementaryColor(hex);
    el_body_color.textContent = `Complementary color: ${getComplementaryColor(hex)}`;

}
setRandomHexColor();
button.addEventListener('click', setRandomHexColor);
