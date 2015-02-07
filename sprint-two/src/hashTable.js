var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  // at index i of storage, set the tuple as (k, v)
  this._storage[i] = this._storage[i] || [];
  this._storage[i].push([k, v]);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var result;
  _.each(this._storage[i], function(tuple){
    if (tuple[0] === k){
      result = tuple[1];
    }
  });
  return result;
};

HashTable.prototype.remove = function(k){

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
