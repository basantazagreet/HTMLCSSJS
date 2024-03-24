const el_btns = document.querySelectorAll('.btn');
const el_text = document.querySelector('.text');

el_btns.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        const filter = e.target.getAttribute('data-link');
        const filter2 = e.target.dataset.link;
        console.log(filter2);

        if(filter == "home"){
            el_text.textContent = "Home Page";
        }else if(filter == "about"){
            el_text.textContent = "About Page";
        }else{
            el_text.textContent = "Contact page";
        }
    });
});