const API_KEY = "3b02c6793190d859bf040d1decaae72d";
const options = {method: 'GET', headers: {accept: 'application/json'}};
const API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3b02c6793190d859bf040d1decaae72d&page=1";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=3b02c6793190d859bf040d1decaae72d&query=";

const IMG_PATH = "https://image.tmdb.org/t/p/w1280"

let el_movies = document.querySelector(".movies");
let el_form = document.querySelector("form");
let el_search = document.querySelector(".search");


getMovies(API_URL);
async function getMovies(url){
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.results);

    displayMovies(data.results);
}

function displayMovies(movies){
    el_movies.innerHTML = "";

    movies.forEach((movie) => {
    const el_div = document.createElement('div');
    el_div.classList.add("movie");
    el_div.innerHTML = `
    <img src="${IMG_PATH + movie.poster_path}" alt="">
    <div class="details">
      <h2 class="title">${movie.title}</h2>
      <p class="rate">Rating: <span class="rating">${movie.vote_average}</span></p>
      <p class="overview">${movie.overview}</p>
    </div>
    `        ;
    el_movies.appendChild(el_div);
    });
}

el_form.addEventListener('submit', (e)=>{
    e.preventDefault();
    el_movies.innerHTML = "";
    const inputVal = el_search.value;

    if(inputVal){
        getMovies(SEARCH_API+inputVal);
        el_search.value = "";
    }
    
});