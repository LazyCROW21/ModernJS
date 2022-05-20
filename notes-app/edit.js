const noteId = location.hash.substring(1);
let notes = loadNotes();
const timestampNow = moment().valueOf();

const getNote = function(uuid) {
    let note = notes.find(function(n){
        return uuid === n.id;
    });
    
    if(note === undefined) {
        location.assign('./index.html');
    }
    return note;
}

let note = getNote(noteId);

const setNoteForm = function (note) {
    document.querySelector('#title').value = note.title;
    document.querySelector('#body').value = note.body;
    document.querySelector('#editAgo').textContent = moment(note.updatedAt).fromNow();
}

window.addEventListener('storage', function(e){
    if(e.key === 'notes') {
        notes = JSON.parse(e.newValue);
    }
    note = getNote(noteId);
    setNoteForm(note);
});

document.querySelector('#note-form').addEventListener('submit', function(e){
    e.preventDefault();
    note.title = document.querySelector('#title').value;
    note.body = document.querySelector('#body').value;
    note.updatedAt = moment().valueOf();
    saveNote(note);
    setNoteForm(note);
    alert('Note saved!');
});

setNoteForm(note);