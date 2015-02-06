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

treeMethods.contains = function(target, result){
  result = result || false;
  if (this.value === target) {
    result = true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      result = result || this.children[i].contains(target);
    }
  }
  return result;

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
