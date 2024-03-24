const el_hero = document.querySelector('.hero');
const el_vilan = document.querySelector('.vilan');


const jump = () => {
    if (!el_hero.classList.contains('animate')) {
        el_hero.classList.add('animate');
        el_vilan.style.animation = "move 1s infinite linear";
        setTimeout(() => {
            el_hero.classList.remove('animate');
        }, 300);
    }
}

document.addEventListener('keydown', (e) => {
    if (e.code == "Space")
        jump();
});


let isAlive = setInterval(()=>{
    let hero_top = parseInt(window.getComputedStyle(el_hero).getPropertyValue('top'));
    let vilan_left = parseInt(window.getComputedStyle(el_vilan).getPropertyValue('left'));

    if(vilan_left < 40 && vilan_left>20 && hero_top>=130){
        el_vilan.style.animation = "none";
        alert('Game over');
    }
},10)