const count = document.getElementById('click-to-copy');


const button = document.querySelector('.btn-reset');
button.addEventListener('click', () => {
    //navigator.clipboard object
    navigator.clipboard.writeText(count.value)
    .then(()=>{
        
        setTimeout(()=>{
    
            button.innerHTML = "<i class=\"fa fa-check\"></i> Copied"
        },350)
    });
});