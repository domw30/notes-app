(function(exports) {
  function SingleNoteView(note) {
    this.note = note
  }
  SingleNoteView.prototype.viewNote = function(note) {
    return `<div>${this.note.content}</div>`
  }
  exports.SingleNoteView = SingleNoteView
})(this);
