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

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
