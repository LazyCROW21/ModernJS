let notes = loadNotes();

const filters = {
    searchText: ''
};

const notesJSON = localStorage.getItem('notes');
if(notesJSON != null) {
    notes = JSON.parse(notesJSON);
}

document.querySelector('#addNoteBtn').addEventListener('click', function(e) {
    let uuid = uuidv4();
    notes.push({
        id: uuid,
        title: e.target.value,
        body: ''
    });
    localStorage.setItem('notes', JSON.stringify(notes));
    location.assign(`./note.html#${uuid}`);
});

document.querySelector('#clearNotesBtn').addEventListener('click', function(e) {
    document.querySelectorAll('.note').forEach(function(note){ note.remove(); });
});

document.querySelector('#searchInp').addEventListener('input', function(e){
    filters.searchText = e.target.value;
    // debugger;
    renderNotes(notes, filters);
});

document.querySelector('#sortOption').addEventListener('change', function(e){
    console.log(e.target.value);
});

renderNotes(notes, filters);