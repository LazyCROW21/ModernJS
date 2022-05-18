
const notes = [
    {
        title: 'Note 1',
        body: 'Some big sentence with absolutely no meaning'
    },
    {
        title: 'Note 2',
        body: 'Some other big sentence with absolutely no meaning'
    },
    {
        title: 'Note 3',
        body: 'Some weird big sentence with absolutely no meaning'
    }
];

// console.log(notes.pop());

// notes.push('Note Push');
// notes.unshift('Added To First');

// notes.splice(1, 0, 'Middle');

// callback function
// notes.forEach(function(element, idx){
//     console.log(`Item ${idx + 1}:  ${element}`);
// });

// console.log(notes);
// console.log(notes.length);
// console.log(notes[1]);
// console.log(notes.shift());

// for (let i = 0; i < notes.length; i++) {
//     console.log(i+1, notes[i]);
// }

// console.log(notes.indexOf({}));

// let idx = notes.findIndex(function(note, idx){
//     return note.title === 'Note 1';
// });

// this warapper can be replaced by Array.find()
// let findNote = function(notes, noteTitle) {
//     let idx = notes.findIndex(function(note){
//         return note.title.toLowerCase() === noteTitle.toLowerCase();
//     });

//     if(idx === -1) {
//         return {}
//     }
//     return notes[idx];
// }


const findNotes = function(notes, query) {
    return notes.filter(function(note, idx) {
        const st = query.toLowerCase();
        const tm = note.title.toLowerCase().includes(st);
        const bm = note.body.toLowerCase().includes(st);
        return (tm || bm);
    });
}

// console.log(findNote(notes, 'Note 2'));
console.log(findNotes(notes, 'wei'));