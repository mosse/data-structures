var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.numElements = 0;
};

Stack.prototype.size = function(){
  return this.numElements;
};

Stack.prototype.push = function(val){
  this.storage[this.numElements++] = val;
};

Stack.prototype.pop = function(){
  if (this.size() > 0) {
    var result = this.storage[--this.numElements];
    delete this.storage[this.numElements];
    return result;
  }
};

