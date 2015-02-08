var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._counter = 0;
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var found = false;
  var bucket = this._storage.get(i);
  bucket = bucket || [];

  for (var j = 0; j < bucket.length; j++){
    var tuple = bucket[j];
    if (tuple[0] === k){
      tuple[1] = v;
      found = true;
    }
  }

  if (!found){
    bucket.push([k, v]);
    this._storage.set(i, bucket);
    this._counter++;
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var result = null;
  _.each(this._storage.get(i), function(tuple){
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
  var bucket = this._storage.get(i);
  // iterate through the bucket
  for (var j = 0; j < bucket.length; j++) {
    if (bucket[j][0] === k) {
      var result = bucket.splice(j, 1);
      return result[1];
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
