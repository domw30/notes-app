(function(exports) {

  var NoteView = function(noteList) {
    this.noteList = noteList.returnAll()
  }

  NoteView.prototype.htmlString = function() {
    var htmlString = '<ul>'

    for(var i = 0; i < this.noteList.length; i++) {
        htmlString += '<li><div>' + this.noteList[i].displayText() + '</div></li>'
    }

    htmlString += '</ul>';

    return htmlString
  }

  exports.NoteView = NoteView;

})(this);
