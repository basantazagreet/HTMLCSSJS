const el_form = document.querySelector("form");
const el_mealList = document.getElementById("meal");
const el_searchInput = document.getElementById("search");
const el_mealModal = document.querySelector(".meal-modal");
const el_recipe = document.querySelector(".recipe-content");
const el_closeBtn = document.querySelector(".close-btn");


const SEARCH_URL = "https://www.themealdb.com/api/json/v1/1/filter.php?i=";
const LOOKUP_URL = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";

//Event Listeners
el_mealList.addEventListener('click', getMealRecipe);
el_form.addEventListener("submit", getMeals);
el_closeBtn.addEventListener("click", closeModal);

async function getMeals() {
    let searchInputVal = el_searchInput.value.trim();
    const res = await fetch(`${SEARCH_URL}${searchInputVal}`);
    const data = await res.json();
    displayMeals(data.meals);
}

function displayMeals(meals) {
    let html = "";
    if (meals) {
        meals.forEach(meal => {
            html += `
         <div class="meal" data-id="${meal.idMeal}">
            <div class="meal-img">
              <img src="${meal.strMealThumb}" alt="">
            </div>
            <div class="meal-name">
              <h3>${meal.strMeal}</h3>
              <a href="#" class="recipe-btn">View Recipe &rarr;</a>
            </div>
          </div>
         `;


        });

    } else {
        html = "No Meal found"
    }


    el_mealList.innerHTML = html;

}


//Get recipe

async function getMealRecipe(e) {
    if (e.target.classList.contains('recipe-btn')) {
        let mealItem = e.target.parentElement.parentElement;
        const res = await fetch(`${LOOKUP_URL}${mealItem.dataset.id}`);
        const data = await res.json();
        console.log(data);
        displayRecipe(data.meals);
    }
}

//Display recipe

function displayRecipe(meal) {
    meal = meal[0];
    let html = `
    <div class="recipe-img">
    <img src="${meal.strMealThumb}" alt="">
  </div>
  <h2 class="recipe-title">${meal.strMeal}</h2>
  <div class="recipe-instruction">
    <h3>Instruction</h3>
    <p>
      ${meal.strInstructions}
    </p>
  </div>

  <div class="recipe-link">
    <a href="${meal.strYoutube}" target="_blank">Watch Video</a>
  </div>
    `;
    el_recipe.innerHTML = html;
    el_mealModal.style.display = 'block';
}

function closeModal(){
    el_mealModal.style.display = 'none';
}