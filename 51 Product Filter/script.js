const el_btns = document.querySelectorAll('.btn');
const el_store_products = document.querySelectorAll('.store-product');

for(let i=0; i<el_btns.length; i++){
    el_btns[i].addEventListener('click', function(e){
        const el_currents = document.getElementsByClassName('active');
        el_currents[0].className = el_currents[0].className.replace('active', "");
        this.className += " active";

        const filter = e.target.dataset.filter;

        el_store_products.forEach((product) => {
            if(filter === 'all'){
                product.style.display = "block";
            }else if(product.classList.contains(filter)){
                product.style.display = "block";
            }else{
                product.style.display = "none";
            }
        });
    })
}

//Search filter
const el_search = document.getElementById('search');
const el_products = document.querySelectorAll('.product-details h2');
const el_no_result = document.querySelector('.no-result');

el_search.addEventListener('keyup', filterProducts);

function filterProducts(e){
    const text = e.target.value.toLowerCase();
    el_products.forEach((product) => {
        const item = product.textContent;

        if(item.toLowerCase().indexOf(text) != -1){
            product.parentElement.parentElement.style.display = "block";
            el_no_result.style.display = "none";
        }else{
            product.parentElement.parentElement.style.display = "none";
        }
    });
}