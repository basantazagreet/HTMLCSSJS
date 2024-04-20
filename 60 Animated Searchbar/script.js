const el_searchIcon = document.querySelector('.fa-search');
const el_closeIcon = document.querySelector('.fa-times');
const el_search = document.querySelector('.search');
const el_searchInput = document.querySelector('.search input');


el_searchIcon.addEventListener('click', ()=>{
    el_searchIcon.style.transform = 'translateY(200%)';
    el_closeIcon.style.transform = 'translateY(0)';

    showSearchEl();
});
el_closeIcon.addEventListener('click', ()=>{
    el_searchIcon.style.transform = 'translateY(0)';
    el_closeIcon.style.transform = 'translateY(-200%)';
    hideSearchEl();
});

function showSearchEl(){
    el_search.style.transform = "translateX(0)";
    setTimeout(()=>{
        el_search.style.width = "30rem";
    },1000);
    setTimeout(()=>{
        el_searchInput.setAttribute('Placeholder', "Search ...");
    },2000);
}
function hideSearchEl(){
    el_searchInput.setAttribute('Placeholder', "");
    setTimeout(()=>{
        el_search.style.width = "4.5rem";
        el_search.style.transform = "translateX(200%)";
    },2000);
}