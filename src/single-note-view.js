(function(exports) {
  var SingleNoteView = function(note) {
    this.note = note;
  };

  SingleNoteView.prototype.viewNote = function() {
    var noteHTMLString = '<div>' + this.note.content + '</div>';
    return noteHTMLString;
  };

  exports.SingleNoteView = SingleNoteView;
})(this);
