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

function getHTMLCreatesHTMLString() {
  var notelists = new NoteList()
   notelists.addNote("teststring")
   notelists.addNote("teststring2")
   var noteListViews = new NoteListView(notelists)
   assert.isEqual(noteListViews.getHTML(), "<ul><li><div>teststring</div></li><li><div>teststring2</div></li></ul>")
};

listIsAnArray();
listStartsEmpty();
getListReturnsList();
addNoteCreatesANoteAndStoresIt();
getHTMLCreatesHTMLString();
