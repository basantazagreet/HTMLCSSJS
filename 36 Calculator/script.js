const el_result = document.querySelector('p');
const el_clear = document.querySelector('.clear');
const keys = document.getElementsByTagName('li');

//HTML collection
for(let i=0; i<keys.length; i++){
    if(keys[i].innerHTML === '='){
        keys[i].addEventListener('click', calculate);
    }else{
        keys[i].addEventListener('click', addToCurrentValue(i))
    }
}

function addToCurrentValue(i){
    return ()=>{
        if(keys[i].innerHTML === "x"){
            el_result.innerHTML += '*';
        }else{
            el_result.innerHTML += keys[i].innerHTML;
        }
    }
}

function calculate(){
    return (el_result.innerHTML = eval(el_result.innerHTML));
}

el_clear.addEventListener('click', ()=>{
    el_result.innerHTML = "";
});