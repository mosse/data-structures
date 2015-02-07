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
  var result = null;
  _.each(this._storage[i], function(tuple){
    if (tuple[0] === k){
      result = tuple[1];
    }
  });
  return result;
};

HashTable.prototype.remove = function(k){
  // pass key into hash function to get index
  var i = getIndexBelowMaxForKey(k, this._limit);
  // get bucket at index
  var bucket = this._storage[i];
  // iterate through the bucket
  for (var j = 0; j < bucket.length; j++) {
    if (bucket[j][0] === k) {
      bucket.splice(j, 1);
    }
  }
  //    for each element, check if el[0] === k
  //      splice at i
};



/*
 * Complexity: What is the time complexity of the above functions?
 * insert(): O(1)
 * retrieve(): O(1)
 * remove(): O(1)
 */
