const el_addNoteBtn = document.getElementById('add-btn');
const el_noteTitle = document.getElementById('note-title');
const el_noteText = document.getElementById('note-text');
const el_notes = document.getElementById('notes');
const el_clear = document.querySelector('.clear');

let notes;
function getNotes() {
    notes = JSON.parse(localStorage.getItem('notes')) || [];
}

el_addNoteBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Button clicked');

    if (el_noteTitle.value == "" || el_noteText.value == "") {
        alert("Please enter values");
    } else {
        getNotes();
        let noteObj = {
            title: el_noteTitle.value,
            text: el_noteText.value,
        }
        notes.push(noteObj);
        localStorage.setItem('notes', JSON.stringify(notes));
        document.querySelector('form').reset();
    }
    displayNotes();
});

function displayNotes() {
    getNotes();
    let html = "";
    notes.forEach((note, index) => {
        html += `
        <div class="note">
              <div class="note-cta">
                <p class="note-counter">Note ${index + 1}</p>
                <div class="note-cta-btn">
                  <button class="note-btn" id="${index}" onClick="deleteNote(this.id)">
                    <i class="fas fa-trash"></i>Delete
                  </button>
                  <button class="note-btn edit-btn" id="${index}" onClick="editNote(this.id)">
                    <i class="fas fa-edit"></i>Edit
                  </button>
                </div>
              </div>
              <hr>

              <h3 class="note-title">Title: ${note.title} </h3>
              <p class="note-text">${note.text}</p>
            </div>
        `
    });

if (notes.length != 0){
        el_notes.innerHTML = html;
}else{
    el_notes.innerHTML = "Please add a note";
}
}

function deleteNote(index) {
    getNotes();
    notes.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notes));
    displayNotes();
}

el_clear.addEventListener('click', ()=>{
    localStorage.clear();
    displayNotes();
});

function editNote(index){
    getNotes();
    el_noteTitle.value = notes[index].title;
    el_noteText.value = notes[index].text;

    notes.splice(index,1);
    localStorage.setItem('notes', JSON.stringify(notes));
    displayNotes();
}



displayNotes();