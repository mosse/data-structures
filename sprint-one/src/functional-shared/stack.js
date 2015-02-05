var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};
  var numElements = 0;
  var obj = {storage: storage, numElements: numElements};
  return _.extend(obj, stackMethods);

};

var stackMethods = {
  size: function() {
    return this.numElements;
  },
  push: function(val) {
    this.storage[this.numElements++] = val;
  },
  pop: function() {
    this.numElements && this.numElements--;
    return this.storage[this.numElements];
  }
};


