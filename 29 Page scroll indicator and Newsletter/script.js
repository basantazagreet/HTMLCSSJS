window.onscroll = () => scrollProgress();

function scrollProgress(){
    //safari and chrome browsers
    const current_state = document.body.scrollTop || document.documentElement.scrollTop;
    const page_height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const scroll_percentage = (current_state/page_height)*100;
    const el_progress_bar = document.querySelector('.progress');
    el_progress_bar.style.visibility = "visible";
    el_progress_bar.style.width = scroll_percentage + '%';

    //Newsletter

    const el_newsletter = document.querySelector('.newsletter');
    if(scroll_percentage > 80){
        el_newsletter.style.transform = 'translateX(0)';
    }else{
        el_newsletter.style.transform = 'translateX(-100%)';
    }
    
    document.querySelector('.fa-times').addEventListener('click', ()=>{
        el_newsletter.style.transform = 'translateX(-100%)';
    });
}