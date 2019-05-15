(function(exports) {
  function NoteListView(notelist) {
    NOTELIST = notelist
  }
  var htmlString = ""
  NoteListView.prototype.getHTML = function() {
    NOTELIST.getList().map(function(note) {
      htmlString = htmlString + `<li><div>${note.getText()}</div></li>`
    });
    return "<ul>" + htmlString + "</ul>"
  };

  exports.NoteListView = NoteListView
})(this);
