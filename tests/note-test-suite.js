function storeStringsAsNoteText() {
  var note = new Note('Test');

  assert.isTrue(note.content === 'Test')
};
console.log('storeStringsAsNoteText');
storeStringsAsNoteText();

function checkDisplayText() {
  var note = new Note('Banana')
  assert.isTrue(note.displayText() === 'Banana')
};
console.log('checkDisplayText');
checkDisplayText();

function returnAllNotes() {
  var noteList = new NoteList()
  assert.arraysMatch(noteList.returnAll(), noteList.notes);
}
console.log('returnAllNotes');
returnAllNotes()

function createNewNote() {
  var notelist = new NoteList();
  notelist.createNewNote('Pears')
  var note = notelist.notes[0];
  assert.isTrue(note.displayText() === 'Pears');
}
console.log('createNewNote');
createNewNote();

function viewNoteListHTML() {
  var noteList = new NoteList();
  noteList.createNewNote('Morgan');
  noteList.createNewNote('Freeman');
  var noteView = new NoteView(noteList);
  var html = '<ul><li><div>Morgan</div></li><li><div>Freeman</div></li></ul>';
  assert.isTrue(noteView.htmlString() === html);
}
console.log('viewNoteListHTML');
viewNoteListHTML();

function initializeNoteController() {
  var noteList = new NoteList();
  var noteController = new NoteController(noteList);
  assert.isTrue(noteController instanceof NoteController)
};
console.log('initializeNoteController');
initializeNoteController();

function testASingleNoteView() {
  var note = new Note('Bambi');
  // var noteList = new NoteList();
  // noteList.createNewNote('Bambi');
  var singleNoteView = new SingleNoteView(note);
  var noteHtml = '<div>Bambi</div>';
  assert.isTrue(singleNoteView.viewNote() === noteHtml);
};
console.log('testASingleNoteView');
testASingleNoteView();
