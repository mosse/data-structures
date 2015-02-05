var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var head = 0;
  var tail = 0;
  var storage = {};
  var obj = {storage: storage, head: head, tail: tail};
  return _.extend(obj, queueMethods);
};

var queueMethods = {
  size: function() {
    return this.tail - this.head;
  },
  enqueue: function(val){
    this.storage[this.tail++] = val;
  },

};



