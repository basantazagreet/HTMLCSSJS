const el_input = document.querySelector('textarea');
const el_limit = document.querySelector('.limit');
const el_btn = document.querySelector('.btn');
let max = 50;

const updateLimit = () => {
    el_limit.textContent = max;
    el_input.addEventListener("input" , ()=>{
        let inputLength = el_input.value.length;
        el_limit.textContent = max - inputLength;

        if(inputLength>max){
            el_btn.disabled = true;
            el_limit.style.color = "red";
        }else{
            el_btn.disabled = false;
            el_limit.style.color = "black";
        }
    });
}

updateLimit();

//Tweet function

el_btn.addEventListener("click", (e)=>{
    e.preventDefault();
    tweet();
});


const tweet = () => {
    const tweetInput = "https://twitter.com/intent/tweet?text=";
    window.open(`${tweetInput}${el_input.value}`);
}


