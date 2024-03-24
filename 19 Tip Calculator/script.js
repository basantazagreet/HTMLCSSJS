const el_bill = document.getElementById('bill');
const el_rate = document.querySelector('.rate');
const el_tip = document.getElementById('tip');
const el_total = document.getElementById('total');
const el_button = document.querySelector('button');
const el_error = document.querySelector('.error');

const hideError = () => {
    setTimeout(()=>{
        el_error.style.display = 'none'
    },4000);
}


const calculateTip = () => {
    const bill = parseFloat(el_bill.value);
    const rate = parseFloat(el_rate.value);

    if(bill === "" || rate=== ""){
        el_error.style.display = 'inline';
        hideError();
    }else if(isNaN(bill)){
        el_error.textContent = "Please enter a bill amount in number"
        el_error.style.display = 'inline';
        hideError();
    }else{
        const tip = bill*rate;
        el_tip.textContent =   `Tip: $${tip.toFixed(2)}`;
        const total = bill + tip;
        el_total.textContent = `Total: $${total.toFixed(2)}`
    }
}

el_button.addEventListener('click', calculateTip);