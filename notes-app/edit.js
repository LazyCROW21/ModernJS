const noteId = location.hash.substring(1);
let notes = loadNotes();
const timestampNow = moment().valueOf();

const getNote = (uuid) => {
    let note = notes.find((n) => uuid === n.id);
    if(!note) {
        location.assign('./index.html');
    }
    return note;
}

let note = getNote(noteId);

const setNoteForm = (note) => {
    document.querySelector('#title').value = note.title;
    document.querySelector('#body').value = note.body;
    document.querySelector('#editAgo').textContent = moment(note.updatedAt).fromNow();
}

window.addEventListener('storage', (e) => {
    if(e.key === 'notes') {
        notes = JSON.parse(e.newValue);
    }
    note = getNote(noteId);
    setNoteForm(note);
});

document.querySelector('#note-form').addEventListener('submit', (e) => {
    e.preventDefault();
    note.title = document.querySelector('#title').value;
    note.body = document.querySelector('#body').value;
    note.updatedAt = moment().valueOf();
    saveNote(note);
    setNoteForm(note);
    alert('Note saved!');
});

setNoteForm(note);