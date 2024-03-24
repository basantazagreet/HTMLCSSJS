let el_input = document.querySelector('.input');
let el_character = document.querySelector('.character');
let el_word = document.querySelector('.word');
let el_reading_time = document.querySelector('.reading-time');
let el_word_limit = document.querySelector('.word-limit');
let WORD_LIMIT = 10;

el_input.addEventListener('keyup', characterCount);
el_input.addEventListener('keyup', wordCounter);

function characterCount() {
    el_character.innerHTML = el_input.value.length;
}

function wordCounter(e) {
    let words = el_input.value.match(/\b[-?(\w+)?]+\b/gi);
    let words_left = 10;
    if (words) {
        el_word.innerHTML = words.length;
        el_word_limit.innerHTML = words_left - words.length;
    } else {
        el_word.innerHTML = 0;
    }

    //Word limit reached handling
    el_input.addEventListener('keydown', function(e){
         words = el_input.value.match(/\b[-?(\w+)?]+\b/gi);
        if (words) {
            if(words.length > WORD_LIMIT - 1 && e.code !== 'Backspace'){
                e.preventDefault();
            }
        } 
    } );

    //Reading time based on 225 words/min

    if(words){
        const seconds = Math.floor((words.length * 60)/ 225);

        if(seconds > 59){
            let minutes = Math.floor(seconds/60);
            seconds = seconds % 60;
            el_reading_time.innerHTML = `${format(minutes)} mins ${format(seconds)} secs`;
        }else{
            el_reading_time.innerHTML = format(seconds) +"secs";
        }
    }
}

function format(t){
   return t<10 ? `0${t}`: t;
}