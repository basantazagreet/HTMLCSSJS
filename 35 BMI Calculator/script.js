/*
BMI-kg/m2
Underweight- <18.5
normal-18.5 to 24.9
overweight- 25-29.9
obese- 30 and above
*/

const el_btn = document.querySelector('.btn');
const el_result = document.querySelector('.result');
const el_resetBtn = document.querySelector('.btn-reset');


el_btn.addEventListener('click', calculateBMI);

function calculateBMI(e){
    e.preventDefault();
    let height = document.querySelector('.height').value;
    let weight = document.querySelector('.weight').value;

    if(height==="" || isNaN(height)){
        el_result.textContent = "Please enter a valid height";
        el_result.style.display = "block";
        setTimeout(()=>{
            el_result.style.display = "none";
        },2000)
    }else if(weight ==="" || isNaN(weight)){
        el_result.textContent = "Please enter a valid weight";
        el_result.style.display = "block";
        setTimeout(()=>{
            el_result.style.display = "none";
        },2000)
    }else{
         height = height/100;
        let BMI = (weight/ Math.pow(height, 2)).toFixed(2);
        
        if(BMI<18.5){
            setResult(`Underweight BMI:<span>${BMI}</span>`, 'red')
        }else if(BMI>=18.5 && BMI<=24.9){
            setResult(`Normal BMI:<span>${BMI}</span>`, 'green')
        }else if(BMI>24.9 && BMI<30){
            setResult(`Overweight BMI:<span>${BMI}</span>`, 'orange')
        }else{
            setResult(`Obese BMI:<span>${BMI}</span>`, 'red')
        }
    }

    function setResult(content,color){
        el_result.style.display = 'block';
        el_result.innerHTML = content;
        el_result.style.backgroundColor = color;
        el_resetBtn.style.display= 'block';
    }


}

el_resetBtn.addEventListener('click', ()=>{
    document.querySelector('.height').value = "";
    document.querySelector('.weight').value = "";
    el_result.style.display = 'none';
    el_resetBtn.style.display= "none";
});