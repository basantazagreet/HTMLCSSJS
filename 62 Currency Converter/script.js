const el_cur1 = document.querySelector('.cur-1');
const el_cur2 = document.querySelector('.cur-2');

const el_cur1Input = document.querySelector('.cur-1-input');
const el_cur2Input = document.querySelector('.cur-2-input');

const el_baseRate = document.querySelector('.base');
const el_switchCur = document.querySelector('.switch-cur');

const API_KEY = "aa20f5e0aded2742507d814a";
const API_URL = "https://v6.exchangerate-api.com/v6/";

const countries = [
    {name: "EUR", flagURL: "https://www.worldometers.info/img/flags/fr-flag.gif"},
    {name: "USD", flagURL: "https://www.worldometers.info/img/flags/us-flag.gif"},
    {name: "GBP", flagURL: "https://www.worldometers.info/img/flags/uk-flag.gif"},
]



async function getExchangeRate(){
    const cur1Value = el_cur1.value;
    const cur2Value = el_cur2.value;

    const response = await fetch(`${API_URL}${API_KEY}/latest/${cur1Value}`);
    const data = await response.json();
    const RATE = data.conversion_rates[cur2Value];

    el_baseRate.textContent = `1 ${cur1Value} = ${RATE.toFixed(2)} ${cur2Value}`;
    el_cur2Input.value = (el_cur1Input.value*RATE).toFixed(2);

}

getExchangeRate();

//Add event listener
//first select box ma change vaye
el_cur1.addEventListener("change", ()=>{
    getExchangeRate();
    getFlag();
    
});
el_cur2.addEventListener("change", ()=>{
    getExchangeRate();
    getFlag();

});

el_cur1Input.addEventListener("input", getExchangeRate);
el_cur2Input.addEventListener("input", getExchangeRate);

el_switchCur.addEventListener("click", ()=>{
    const cur1Val = el_cur1.value;
    el_cur1.value = el_cur2.value;
    el_cur2.value = cur1Val;
    el_switchCur.classList.toggle('rotate');
    getExchangeRate();
    getFlag();
})


//GET FLAG

function getFlag(){
    countries.forEach((country)=>{
        // console.log(country.name);
        if(el_cur1.value == country.name){
            console.log(country.flagURL);
            const el_img = document.querySelector('.from img');
            el_img.setAttribute('src', country.flagURL);
        }
        if(el_cur2.value == country.name){
            console.log(country.flagURL);
            const el_img = document.querySelector('.to img');
            el_img.setAttribute('src', country.flagURL);
        }

    });
}
