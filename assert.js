var assert = {
  isEqual: function(assert1, assert2) {
    if (assert1 !== assert2) {
      throw new Error("Assertion failed:" + assert1 + " does not equal " + assert2);
    }
  }
};
