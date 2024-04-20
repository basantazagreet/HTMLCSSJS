const el_fab = document.getElementById("fab");
const el_fabBtns = document.querySelector(".fab-btns");

el_fab.addEventListener("click", ()=>{
    el_fabBtns.classList.toggle("show");
});