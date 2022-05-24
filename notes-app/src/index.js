import uuidv4 from 'uuid/v4';
import moment from 'moment';
import {loadNotes, renderNotes} from './functions';

let notes = loadNotes();

const filters = {
    searchText: '',
    sort: 'E'
};

const notesJSON = localStorage.getItem('notes');
if(notesJSON) {
    notes = JSON.parse(notesJSON);
}

document.querySelector('#addNoteBtn').addEventListener('click', (e) => {
    let uuid = uuidv4();
    let timestamp = moment().valueOf();
    notes.push({
        id: uuid,
        title: e.target.value,
        body: '',
        createdAt: timestamp,
        updatedAt: timestamp
    });
    localStorage.setItem('notes', JSON.stringify(notes));
    location.assign(`./note.html#${uuid}`);
});

document.querySelector('#clearNotesBtn').addEventListener('click', (e) => {
    document.querySelectorAll('.note').forEach(function(note){ note.remove(); });
});

document.querySelector('#searchInp').addEventListener('input', (e) => {
    filters.searchText = e.target.value;
    // debugger;
    renderNotes(notes, filters);
});

document.querySelector('#sortOption').addEventListener('change', (e) => {
    filters.sort = e.target.value;
    renderNotes(notes, filters);
});

window.addEventListener('storage', (e) => {
    if(e.key === 'notes') {
        notes = JSON.parse(e.newValue);
    }
    renderNotes(notes, filters);
});

renderNotes(notes, filters);