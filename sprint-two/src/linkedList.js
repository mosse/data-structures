var LinkedList = function(){
  var list = {};
  list.tail = null;
  list.head = null;

  list.addToTail = function(value){
    var node = LinkedListNode(value);
    if (!list.head) {
      list.head = node;
    } else {
      list.tail.next = node;
    }
    list.tail = node;
  };

  list.removeHead = function(){
    var result =  list.head.value;
    list.head = list.head.next;
    return result;
  };

  list.contains = function(target){
    var node = list.head;
    while (node !== list.tail){
      if (node.value === target){
        return true;
      }
      node = node.next;
    }
    return node.value === target;
  };

  return list;
};

var LinkedListNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 *
 * addToTail() - Constant Time
 * removeHead() - Constant Time
 * contains() - Linear Time
 */
