const el_typedWord = document.querySelector('.typed-word');
const el_cursor = document.querySelector('.cursor');


const wordArray = ["Web developer", "Product Designer", "Tech Advocate" ];
let wordArrayIndex = 0;
let letterIndex = 0;

const typingDelay = 200;
const erasingDelay = 100;
const newWordDelay = 2000;


//Typing function

function type(){
    if(letterIndex < wordArray[wordArrayIndex].length){
        
        if(!el_cursor.classList.contains('typing')){
            el_cursor.classList.add('typing');
        }


        
        el_typedWord.textContent += wordArray[wordArrayIndex].charAt(letterIndex);
        letterIndex++;
        setTimeout(type,typingDelay);
    }else{
        el_cursor.classList.remove('typing');
        setTimeout(erase,newWordDelay);
    }
}

//Erase function
function erase(){
    if(letterIndex > 0){

        if(!el_cursor.classList.contains('typing')){
            el_cursor.classList.add('typing');
        }

        el_typedWord.textContent = wordArray[wordArrayIndex].substring(0,letterIndex-1);
        letterIndex--;
        setTimeout(erase, erasingDelay);
    }else{
        el_cursor.classList.remove('typing');

        wordArrayIndex++;
        if(wordArrayIndex>=wordArray.length){
            wordArrayIndex = 0;
        }
        setTimeout(type,typingDelay);
    }
}

document.addEventListener('DOMContentLoaded', ()=>{
    setTimeout(type, newWordDelay);
});

























// wordArray.forEach((word, index) => {
//     console.log(`${index} : ${word}`)
// });

// const word = "Developer";
// const result = word.substring(0,3);
// console.log(result);
