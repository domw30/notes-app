(function(exports) {
  function NoteController(NoteList, NoteListView) {
    this.noteList = new NoteList();
    this.noteListView = new NoteListView(this.noteList);
  };


NoteController.prototype.updateview = function(){
    this.noteList.addNote('Favourite drink: seltzer');
    var element = document.getElementById("app");
    const content = element.innerHTML;
    element.innerHTML = this.noteListView.getHTML();
  };



exports.NoteController = NoteController;
})(this);


var notecontroller = new NoteController(NoteList, NoteListView);

notecontroller.updateview();

// NoteList.prototype.addNote = function (noteText) {
//   return this.list.push(new Note(noteText))
// };
