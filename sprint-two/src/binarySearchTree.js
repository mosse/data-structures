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
  // check current node's value for equality
  if (this.value === value) {
    return true;
  }

  if (value < this.value) {
    if (this.left === null) {
      return false;
    } else {
      return this.left.contains(value);
      }
  }

  else {
      if (this.right === null) {
        return false;
      } else {
        return this.right.contains(value);
      }
    }
  };

BinarySearchTree.prototype.depthFirstLog = function(callback) {
  // base case: run callback on this.value
  callback(this.value);
  if (this.left) {
    this.left.depthFirstLog(callback);
  }
  // if right is not null, then recursively call
  if (this.right) {
    this.right.depthFirstLog(callback);
  }
};

BinarySearchTree.prototype.breadthFirstLog = function(callback){
  var results = [this.value];
  var visitNode = function(node){
    if (node.left) {
      results.push(node.left.value);
    }
    if (node.right) {
      results.push(node.right.value);
    }
    if (node.left) {
      visitNode(node.left);
    }
    if (node.right) {
      visitNode(node.right);
    }
  };
  visitNode(this);
  _.each(results, callback);
};
