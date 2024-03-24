const el_search = document.getElementById('search');
el_search.addEventListener('keyup', search);

function search(){
   let el_country_list = document.getElementsByTagName('li');
   let value = el_search.value.toLowerCase();
    
    for (let i=0; i<el_country_list.length; i++){
        //item includes value
        if(el_country_list[i].textContent.toLowerCase().includes(value)){
            el_country_list[i].style.display = 'block';
        }else{
            el_country_list[i].style.display = 'none';
        }
    }
}