const el_galleryFilter = document.querySelector(".gallery-filter");
const el_galleryImages = document.querySelectorAll(".image");


el_galleryFilter.addEventListener("click" , (e)=>{
    if(e.target.classList.contains('filter-gallery')){
        el_galleryFilter.querySelector('.active').classList.remove('active');
        e.target.classList.add('active');

        const filter = e.target.dataset.filter;
        el_galleryImages.forEach((image)=>{
            if(filter === "all" || image.classList.contains(filter) ){
                image.style.display = "block";
            }else{
                image.style.display = "none";
            }
        } );
    }
});