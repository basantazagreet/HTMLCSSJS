const el_input = document.querySelector('.add-item input');
const el_btn = document.querySelector('.add-item button');
const el_todolist = document.querySelector('.todo-list');
const el_clear = document.querySelector('.clear');


el_btn.addEventListener('click', (e)=>{
    e.preventDefault();
    const el_li = document.createElement('li');
    const el_trash = document.createElement('button');
    el_trash.innerHTML = `<i class="fas fa-trash-alt"></i>`;

    if(el_input.value !== ""){
        el_li.textContent = el_input.value;
        el_li.appendChild(el_trash);
        el_todolist.appendChild(el_li);
    }else{
        alert('Please enter something!!');
    }

    el_trash.addEventListener('click', ()=>{
        //Parent node delete gardine
        el_parent = el_trash.parentNode;
        el_parent.remove();
    });

});

el_clear.addEventListener('click', ()=>{
    el_todolist.innerHTML = "";
});


