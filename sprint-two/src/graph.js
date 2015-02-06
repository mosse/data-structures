

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
  var foundAt = this.find(name);
  this._nodes.splice(foundAt, 1);
};

Graph.prototype.hasEdge = function(fromNode, toNode){

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
};

Graph.prototype.forEachNode = function(cb){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



