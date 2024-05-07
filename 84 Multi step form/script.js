el_steps = document.querySelectorAll('.step');
el_formItems = document.querySelectorAll('.form-item');
el_buttons = document.querySelectorAll('.btn');

let currentFormItem = 0;
el_formItems[currentFormItem].style.display = "block";

if(currentFormItem == 0){
    el_buttons[0].style.display = "none";
    el_steps[0].style.backgroundColor = "#52aae9";
}

//Next button
el_buttons[1].addEventListener("click", ()=>{
    currentFormItem++;
    const prevFormItem = currentFormItem - 1 ;
    if(currentFormItem > 0 && currentFormItem<4){
        el_buttons[0].style.display = "inline-block";
        el_formItems[prevFormItem].style.display = "none";
        el_formItems[currentFormItem].style.display = "block";
        el_steps[currentFormItem].style.backgroundColor = "#52aae9";

        if(currentFormItem == 3){
            el_buttons[1].innerHTML = "Submit";
        }
    }else{
        if(currentFormItem > 3){
            alert("Form submitted");
        }
    }
});


el_buttons[0].addEventListener("click" , ()=>{
    if(currentFormItem > 0){
        currentFormItem--;
        const nextFormItem = currentFormItem + 1;
        el_formItems[currentFormItem].style.display = "block";
        el_formItems[nextFormItem].style.display = "none";
        el_steps[nextFormItem].style.backgroundColor = "#cfd2d4";

        if(currentFormItem == 0){
            el_buttons[0].style.display = "none";
        }

        if(currentFormItem < 3){
            el_buttons[1].innerHTML = "Next";
        }

    }
});