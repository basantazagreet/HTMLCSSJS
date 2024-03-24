import * as v from "./js/variables.js";
import { getUser, errorMessage } from "./js/functions.js";

v.el_form.addEventListener('submit' ,(e)=>{
    e.preventDefault();
    //remove spaces
    let user = v.el_search.value.split(" ").join("");
    if(user === ""){
        errorMessage('Input cannot be blank');
    }else{
        getUser(user);
        v.el_form.reset();
    }
});