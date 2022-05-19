const notes = [
    {
        title: 'Awesome 2',
        body: 'Some other big sentence with absolutely no meaning'
    },
    {
        title: 'Nothing to do 1',
        body: 'Some big sentence with absolutely no meaning'
    },
    {
        title: 'Never doing this 3',
        body: 'Some weird big sentence with absolutely no meaning'
    }
];

const filters = {
    searchText: ''
};

const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function(note){
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
    });
    document.querySelector('#notes-container').innerHTML = '';
    filteredNotes.forEach(function(note){
        const newP = document.createElement('p');
        newP.textContent = note.title;
        newP.className = 'note';
        document.querySelector('#notes-container').appendChild(newP);
    });
};

document.querySelector('#addNoteBtn').addEventListener('click', function(e) {
    console.log('ASDASDSD');
    console.log(e);
});

document.querySelector('#clearNotesBtn').addEventListener('click', function(e) {
    document.querySelectorAll('.note').forEach(function(note){ note.remove(); });
});

document.querySelector('#searchInp').addEventListener('input', function(e){
    filters.searchText = e.target.value;
    renderNotes(notes, filters);
});

renderNotes(notes, filters);