function listIsAnArray() {
  var noteList = new NoteList();
  assert.isAnArray(noteList.list);
};

function listStartsEmpty() {
  var noteList = new NoteList();
  assert.isEmpty(noteList.list);
};

function getListReturnsList() {
  var noteList = new NoteList();
  noteList.list = "teststring"
  assert.isEqual(noteList.getList(), "teststring");
};

function addNoteCreatesANoteAndStoresIt() {
  var noteList = new NoteList();
  noteList.addNote("teststring")
  assert.isEqual(noteList.list[0].getText(), "teststring");
};

listIsAnArray();
listStartsEmpty();
getListReturnsList();
addNoteCreatesANoteAndStoresIt();
