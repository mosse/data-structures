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
  }
};


