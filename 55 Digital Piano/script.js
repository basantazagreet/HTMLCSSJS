const el_keys = document.querySelectorAll('.key');
const el_note = document.querySelector('.key-pressed');

window.addEventListener('keydown', playNote);

function playNote(e){
    const el_audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const el_key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    

    const el_keyNote = el_key.dataset.note;

    el_key.classList.add('playing');
    el_note.innerHTML = el_keyNote;
    el_audio.currentTime = 0;
    el_audio.play();
}

//remove playing class

el_keys.forEach((key) => {
    key.addEventListener('transitionend', removeTransition);
});

function removeTransition(e){
    //transform scale ma matra apply garna
    // if(e.propertyName !== 'transform')    return;
    this.classList.remove('playing');
    
}