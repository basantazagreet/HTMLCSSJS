const el_joke = document.querySelector('.joke');
const el_joke_button = document.querySelector('.btn');
const url = 'http://api.icndb.com/jokes/random';

el_joke_button.addEventListener('click', getJoke);

// function getJoke(){
//     fetch(url)
//     .then((response)=>{
//         return response.json();
//     })
//     .then((data)=>{
//         console.log(data);
//         el_joke.innerHTML = data.value.joke;
//     } );
// }

async function getJoke() {
    try {
        const response = await fetch(url);
        const data = await response.json();

        console.log(data);
    } catch (error){
        el_joke.innerHTML = error.message;
    }

}