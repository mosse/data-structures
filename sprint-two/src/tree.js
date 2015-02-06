var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  return _.extend(newTree, treeMethods);
};



var treeMethods = {};

treeMethods.addChild = function(value){
  var tree = Tree(value);
  this.children.push(tree);
};

treeMethods.contains = function(target){
  var result;
  if (this.value === target) {
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      result = result || this.children[i].contains(target);
    }
  }
  return result || false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 * addChild(): O(1)
 * contains(): O(N)
 */
