(function(exports) {
  function NoteList() {
    this.list = [];
  };
  
  NoteList.prototype.getList = function () {
    return this.list
  };

  NoteList.prototype.addNote = function (noteText) {
    return this.list.push(new Note(noteText))
  };

  exports.NoteList = NoteList;
})(this);
