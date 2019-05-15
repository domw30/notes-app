function textStoresTheText() {
  var note = new Note("noteText");
  assert.isEqual(note.text, "noteText");
};

function getTextReturnsTheText() {
  var note = new Note("noteText");
  assert.isEqual(note.getText(), "noteText");
};

textStoresTheText();
getTextReturnsTheText();
