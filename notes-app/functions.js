const loadNotes = function() {
    const notesJSON = localStorage.getItem('notes');
    if(notesJSON != null) {
        return JSON.parse(notesJSON);
    }
    return [];
}

const sortNotes = function(notes, option) {
    if(option === 'E') {
        return notes.sort(function(a, b){
            if(a.updatedAt > b.updatedAt) {
                return -1;
            } else if(a.updatedAt < b.updatedAt) {
                return 1;
            }
            return 0;
        });
    } else if(option === 'A') {
        return notes.sort(function(a, b){
            if(a.title > b.title) {
                return -1;
            } else if(a.title < b.title) {
                return 1;
            }
            return 0;
        });
    } else if(option === 'C') {
        return notes.sort(function(a, b){
            if(a.createdAt > b.createdAt) {
                return -1;
            } else if(a.createdAt < b.createdAt) {
                return 1;
            }
            return 0;
        });
    }
}

const saveNote = function(note) {
    const idx = notes.findIndex(function (n){
        return note.id === n.id;
    });
    if(idx > -1) {
        notes[idx].title = note.title;
        notes[idx].body = note.body;
        localStorage.setItem('notes', JSON.stringify(notes));
    }
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
    let filteredNotes = notes.filter(function(note){
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
    });
    filteredNotes = sortNotes(filteredNotes, filters.sort);
    document.querySelector('#notes-container').innerHTML = '';
    filteredNotes.forEach(function(note){
        document
        .querySelector('#notes-container')
        .appendChild(generateNoteDOM(note));
    });
};