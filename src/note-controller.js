(function(exports){

var NoteController = function(notelist) {
  notelist.createNewNote('Favourite drink: seltzer')
  this.notelistview = new NoteView(notelist);
};

NoteController.prototype = {
  renderHTML: function () {
    var noteHtml = this.notelistview.htmlString();
    return noteHtml;
  }
};

exports.NoteController = NoteController;
})(this);

window.onload = function() {
  var element = document.getElementById('app');
  var notelist = new NoteList;
  var notecontroller = new NoteController(notelist);
  // var singlenoteview = new SingleNoteView(note);
  element.innerHTML = notecontroller.renderHTML();
};
