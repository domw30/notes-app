var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    } else {
      console.log('- passed the test ✅')
    }
  },
  arraysMatch: function(arrayOne, arrayTwo) {
    if (arrayOne.length !== arrayTwo.length) {
      throw new Error("Assertion failed: arrays are different lengths");
    }
    for (var i = 0; i < arrayOne.length; i++) {
      if (arrayOne[i] !== arrayTwo[i]) {
        throw new Error("Assertion failed: array elements are different");
      }
    }
    console.log('- passed the test ✅')
  }
};
