var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var head = 0;
  var tail = 0;
  var obj = {head: head, tail: tail};
  var _.extend(obj, queueMethods);
};

var queueMethods = {};



