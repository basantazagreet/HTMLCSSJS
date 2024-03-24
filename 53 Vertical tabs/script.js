const el_tabLinks = document.getElementsByClassName('tab-link');
const el_Contents = document.querySelectorAll('.tab-content');

for(let i=0; i<el_tabLinks.length; i++){
    el_tabLinks[i].addEventListener('click', function(e){
        const el_current = document.getElementsByClassName('active');
        el_current[0].className =  el_current[0].className.replace(' active', "");
        this.className += " active";

        const filter = e.target.dataset.filter;

        console.log(filter);

        el_Contents.forEach((content) => {
            if(content.classList.contains(filter)){
                content.style.display= "block";
            }else{
                content.style.display= "none";
            }
        })
    });
}