function getHTMLCreatesHTMLString() {
  var notelists = new NoteList()
   notelists.addNote("teststring")
   notelists.addNote("teststring2")
   var noteListViews = new NoteListView(notelists)
   assert.isEqual(noteListViews.getHTML(), "<ul><li><div>teststring</div></li><li><div>teststring2</div></li></ul>")
};

getHTMLCreatesHTMLString();
