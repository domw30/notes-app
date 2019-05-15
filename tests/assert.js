var assert = {
  isEqual: function(assert1, assert2) {
    if (assert1 !== assert2) {
      throw new Error("Assertion failed:" + assert1 + " does not equal " + assert2);
    } else {
      console.log(`PASS ${assert1} is equal to ${assert2}`)
    }
  },

  isAnArray: function(assert1) {
    if (!Array.isArray(assert1)) {
      throw new Error("Assertion failed:" + assert1 + " is not an array");
    }
  },

  isEmpty: function(assert1) {
    if (!assert1.length === 0) {
      throw new Error("Assertion failed:" + assert1 + " is not empty");
    }
  }
};
