var BinarySearchTree = function(value){
  this.value = value;
  this.left = null;
  this.right = null;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

BinarySearchTree.prototype.insert = function (value) {
  var node = new BinarySearchTree(value);
  if (value <= this.value){
    if (this.left === null){
      this.left = node;
    } else {
      this.left.insert(value);
    }
  } else {
    if (this.right === null){
      this.right = node;
    } else {
      this.right.insert(value);
    }
  }
};

BinarySearchTree.prototype.contains = function(value) {

};

BinarySearchTree.prototype.depthFirstLog = function(callback) {

};
