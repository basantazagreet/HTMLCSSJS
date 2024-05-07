const el_cardNumber = document.querySelector("#number");
const el_cardValidity = document.querySelector("#valid");
const el_cardCvv = document.querySelector("#cvv");

el_cardNumber.addEventListener("input", formatCardNumber);
el_cardValidity.addEventListener("input", formatCardValidity);
el_cardCvv.addEventListener("input", formatCvv);


function formatCardNumber(e) {
    el_cardNumber.maxLength = "19";
    e.target.value = e.target.value
    //no alphabets allowed
        .replace(/[^\dA-Z]/g, "")
        .replace(/[^\da-z]/g, "")
        //one space after every 4 chars
        .replace(/(.{4})/g, "$1 ")
        .trim();

    if (el_cardNumber.value.length == 19) {
        formatCardValidity();
    }
}

function formatCardValidity(e) {
    el_cardValidity.focus();
    el_cardValidity.maxLength = "5";

    if (el_cardValidity.value.length < 5) {
        el_cardValidity.value = el_cardValidity.value
            .replace(/[^\dA-Z]/g, "")
            .replace(/[^\da-z]/g, "")
            //forwardslash if 2 chars entered
            .replace(/(.{2})/g, "$1/")
            .trim();
    }

    if(el_cardValidity.value.length == 5){
        formatCvv();
    }


}

function formatCvv(){
    el_cardCvv.focus();
    el_cardCvv.maxLength = "3";
    el_cardCvv.value = el_cardCvv.value
    .replace(/[^\dA-Z]/g, "")
    .replace(/[^\da-z]/g, "")
    .trim();
}