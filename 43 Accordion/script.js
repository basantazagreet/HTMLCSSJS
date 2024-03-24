const acc = document.querySelectorAll('.accordion');

for(let i=0; i<acc.length; i++){
    acc[i].addEventListener('click', function(){
        this.classList.toggle('active');
        const desc = this.nextElementSibling;

        const all_desc = document.querySelectorAll('.desc');
        const active_acc = document.getElementsByClassName("accordion active");
        if(desc.style.maxHeight){
            desc.style.maxHeight = null;
            this.classList.remove('active');
        }else{

            for(let i=0; i< active_acc.length; i++){
                active_acc[i].classList.remove('active');
            }
            for(let i=0; i< all_desc.length; i++){
                all_desc[i].style.maxHeight = null;
            }

            desc.style.maxHeight = desc.scrollHeight + "px";
            this.classList.add("active");
        }

    });
}