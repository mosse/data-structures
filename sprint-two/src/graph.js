

var Graph = function(){
  this._nodes = [];
};

var Node = function(val){
  this._connections = [];
  this._val = val;
};

Graph.prototype.addNode = function(val){
  var node = new Node(val);
  this._nodes.push(node);
};

Graph.prototype.contains = function(val){
  // iterate over nodes
  for (var i = 0; i < this._nodes.length; i++) {
    // check at each index if node there has target val
    if (this._nodes[i]._val === val) {
      return true;
    }
  }
  return false;
};

Graph.prototype.removeNode = function(node){
};

Graph.prototype.hasEdge = function(fromNode, toNode){
};

Graph.prototype.addEdge = function(fromNode, toNode){
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

Graph.prototype.forEachNode = function(cb){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



