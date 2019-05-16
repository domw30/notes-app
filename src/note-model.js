(function(exports) {

  var Note = function(content) {
    this.content = content;
  };

  Note.prototype.displayText = function () {
    return this.content;
  };

  exports.Note = Note;

})(this);
