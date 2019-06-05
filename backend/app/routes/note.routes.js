module.exports = (app) => {

const notes = require('../controllers/note.controller.js');

//create a new note
app.post('/notes',notes.create);

// Retrieve all Notes
app.get('/notes',notes.findAll);

//Retrieve a single note with noteId
app.get('/notes/:noteid',notes.findOne);

//Update a note with noteId
app.put('/notes/:noteid',notes.update);

//Delete a note with noteId
app.delete('/notes/:noteid',notes.delete);


}