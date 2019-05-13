(function(exports) {
  function testStoresTheTextInATextProperty() {
    var note = new Note("testArguement");

    if (note.text !== "testArguement") {
      throw new Error("Doesn't store text in .text property");
    }
  };

  testStoresTheTextInATextProperty();
})(this);
