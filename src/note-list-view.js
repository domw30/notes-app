(function(exports) {

  var NoteView = function(noteList) {
    this.noteList = noteList.returnAll()
  }

  NoteView.prototype.htmlString = function() {
    var htmlString = '<ul>'

    for(var i = 0; i < this.noteList.length; i++) {
        htmlString += '<li><div>' + reduceNote(this.noteList[i].displayText()) + '</div></li>'
    }
    htmlString += '</ul>';
    return htmlString

    function reduceNote(text) {
    var reducedNote = [];
    var wholeNote = text;
    for(var i = 0; i < 20; i++) {
      reducedNote.push(wholeNote.charAt(i));
    }
    return reducedNote.join("");
  }
}


  exports.NoteView = NoteView;
})(this);
