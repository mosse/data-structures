

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

Graph.prototype.find = function(name) {
  // iterate over nodes
  for (var i = 0; i < this._nodes.length; i++) {
    // if node's name is name
    if (this._nodes[i]._name === name) {
      return i;
    }
  }
  return -1;
};

Graph.prototype.contains = function(name){
  return (this.find(name) === -1) ? false : true;
};

Graph.prototype.removeNode = function(name){
  var foundAt = this.find(name)
  this._nodes.splice(foundAt, 1);
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  // find node
  var n1 = this._nodes[this.find(fromNode)];

  // iterate over connections to see if toNode present
  for (var i = 0; i < n1._connections.length; i++) {
    if (n1._connections[i]._name === toNode) {
      return true;
    }
  }
  return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){

  var n1 = this._nodes[this.find(fromNode)];
  var n2 = this._nodes[this.find(toNode)];

  // Push n2 to connections of n1
  n1._connections.push(n2);
  // Push n1 to connections of n2
  n2._connections.push(n1);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  // find fromNode and toNode as references
  var n1 = this._nodes[this.find(fromNode)];
  var n2 = this._nodes[this.find(toNode)];
  // iterate over fromNode's connections
  _.each(n1._connections, function(node, i) {
    if (node._name === toNode) {
      n1._connections.splice(i, 1);
    }
  });
  // iterate over toNode's connections
  //    if connections's value === fromNode, splice
  _.each(n2._connections, function(node, i) {
    if (node._name === fromNode) {
      n2._connections.splice(i, 1);
    }
  });
};

Graph.prototype.forEachNode = function(cb){
  // iterate over each node in graph
  _.each(this._nodes, function(node){
    cb(node._name);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



