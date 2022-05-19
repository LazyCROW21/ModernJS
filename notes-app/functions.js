const loadNotes = function() {
    const notesJSON = localStorage.getItem('notes');
    if(notesJSON != null) {
        return JSON.parse(notesJSON);
    }
    return [];
}

const removeNotes = function(uuid) {
    const idx = notes.findIndex(function (note){
        return note.id === uuid;
    });
    if(idx > -1) {
        notes.splice(idx, 1);
    }
    localStorage.setItem('notes', JSON.stringify(notes));
}

const generateNoteDOM = function(note) {
    const newD = document.createElement('div');
    const newP = document.createElement('a');
    const newB = document.createElement('button');
    
    newB.textContent = 'X';
    newB.addEventListener('click', function(){
        removeNotes(note.id);
        renderNotes(notes, filters);
    });

    if(note.title.length > 0) {
        newP.textContent = note.title;
    }  else {
        newP.textContent = '-note not found-'
    }
    newP.href = './note.html#'+note.id;
    newP.className = 'todo';

    newD.appendChild(newB);
    newD.appendChild(newP);
    return newD;
}

const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function(note){
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
    });
    document.querySelector('#notes-container').innerHTML = '';
    filteredNotes.forEach(function(note){
        document
        .querySelector('#notes-container')
        .appendChild(generateNoteDOM(note));
    });
};