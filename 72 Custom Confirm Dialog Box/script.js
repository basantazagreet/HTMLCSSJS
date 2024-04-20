const el_btn1 = document.querySelector(".btn-1");
const el_btn2 = document.querySelector(".btn-2");
const el_confirm = document.querySelector(".confirm");
const el_close = document.querySelector(".close");
const el_title = document.querySelector(".title");
const el_content = document.querySelector(".content");
const el_btnOk = document.querySelector(".btn-ok");
const el_btnCancel = document.querySelector(".btn-cancel");




//Custom confirm box 

class ShowConfirm{
    constructor(title, content, ok, cancel){
        this.title = title;
        this.content = content;
        this.ok = ok;
        this.cancel = cancel;
    }

    //callback function passed as argument and called inside.
    trigger(callbackFn){
        el_title.textContent = this.title;
        el_content.textContent = this.content;
        el_btnOk.innerHTML = this.ok;
        el_btnCancel.innerHTML = this.cancel;


        el_confirm.classList.remove("close-modal");

        el_close.addEventListener("click", this.closeModal);
        el_btnCancel.addEventListener("click", this.closeModal);

        el_btnOk.addEventListener("click", ()=>{

            //OK ma balla function finally called
            callbackFn();
            this.closeModal();
        });
    }


    closeModal(){
       el_confirm.classList.add("close-modal"); 
    }
}


// Btn event listeners ma obj created

el_btn1.addEventListener('click', ()=>{
    changeBg("red");
});
el_btn2.addEventListener('click', ()=>{
    changeBg("purple");
});



const changeBag = new ShowConfirm("Change Background", 
"You are about to change the background ",
"Change", "Don't change");

function changeBg(color){
    changeBag.trigger(setBg);
    function setBg(){
        document.body.style.backgroundColor = color;
    }
}