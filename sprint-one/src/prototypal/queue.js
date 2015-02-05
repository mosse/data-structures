var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(queueMethods);
  obj.head = 0;
  obj.tail = 0;
  obj.storage = {};
  return obj;
};

var queueMethods = {
  size: function() {
    return this.tail - this.head;
  },
  enqueue: function(val) {
    this.storage[this.tail++] = val;
  },
  dequeue: function() {
    if (this.size() > 0){
      return this.storage[this.head++];
    }
  }

};


