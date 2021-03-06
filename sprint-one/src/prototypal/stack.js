var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(stackMethods);
  obj.storage = {};
  obj.numElements = 0;
  return obj;
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
    var value = this.storage[this.numElements];
    delete this.storage[this.numElements];
    return value;
  }
};



