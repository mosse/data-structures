

var Graph = function(){
  this._nodes = [];
};

var Node = function(name){
  this._connections = [];
  this._name = name;
};

Graph.prototype.addNode = function(name){
  var node = new Node(name);
  this._nodes.push(node);
};

Graph.prototype.contains = function(name){
  // iterate over nodes
  for (var i = 0; i < this._nodes.length; i++) {
    // check at each index if node there has target name
    if (this._nodes[i]._name === name) {
      return true;
    }
  }
  return false;
};

Graph.prototype.removeNode = function(name){
  // iterate over nodes
  for (var i = 0; i < this._nodes.length; i++) {
    // check at each index for target node
    if (this._nodes[i]._name === name) {
      this._nodes.splice(i, 1);
    }
  }
};

Graph.prototype.hasEdge = function(fromNode, toNode){
};

Graph.prototype.addEdge = function(fromNode, toNode){
  // Iterate through nodes
  for (var i = 0; i < this._nodes.length; i++ ) {
    // If current node = fromNode set ref n1
    if (this._nodes[i]._name === fromNode) {
      var n1 = this._nodes[i];
    }
    // If current node = toNode set ref n2
    if (this._nodes[i]._name === toNode) {
      var n2 = this._nodes[i];
    }
  }
  // Push n2 to connections of n1
  n1._connections.push(n2);
  // Push n1 to connections of n2
  n2._connections.push(n1);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

Graph.prototype.forEachNode = function(cb){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



