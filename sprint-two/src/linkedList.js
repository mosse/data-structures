var LinkedList = function(){
  var list = {};
  list.tail = null;

  list.addToTail = function(value){
    var node = Node(value);
    list.tail = node;
  };

  list.removeHead = function(){
  };

  list.contains = function(target){
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
