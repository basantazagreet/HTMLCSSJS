const el_search = document.querySelector('input');
const el_form = document.querySelector('form');
const el_search_results = document.querySelector('.results');
const el_error = document.querySelector('.alert');
const el_line = document.querySelector('hr');

const api_url = "https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=";

el_form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const search_value = el_search.value;
    if(search_value === ""){
        errorMessage('Search cannot be empty');
    }else{
        getResult(search_value);
    }
});

function errorMessage(msg){
    el_error.style.display = "block";
    el_line.style.display = "block";
    el_error.textContent = msg;
}


async function getResult(search){
    const response = await fetch(api_url + search);
    const results = await response.json();

    console.log(results);
    if(results.query.search.length == 0){
        return errorMessage('No results found');
    }else{
        displayResults(results);
    }
}


function displayResults(results){
    el_line.style.display = "block";
    let output = "";
    results.query.search.forEach((result) => {
        let result_url = `https://en.wikipedia.org/?curid=${result.pageid}`;
        output += `
        <div class="result p-2">
                <a href="${result_url}" target="_blank" rel="noopener" class="h3 fw-bold">${result.title}</a>
                <br>
                <a href="${result_url}" target="_blank" rel="noopener" class="fs-5 text-success">${result_url}</a>
                <p class="fs-5">${result.snippet}</p>

              </div>
        `;
    });
    el_search_results.innerHTML = output;
}