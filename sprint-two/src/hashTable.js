
var HashTable = function() {
  this._storage = LimitedArray(this._limit);
  this._limit = 8;
};

HashTable.prototype.insert = function(key, value) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  var bucket = this._storage[index];
  if (!bucket) {
    var bucket = [];
    this._storage[index] = bucket;
  }

  var override = false;
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === key) {
      tuple[1] = value;
      override = true;
    }
  }

  if (!override) {
    bucket.push([key, value]);
  }
  this._storage.set(index, value);
};

HashTable.prototype.retrieve = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  var bucket = this._storage[index];

  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === key) {
      return tuple[1];
    }
  }
};

HashTable.prototype.remove = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  var bucket = this._storage[index];

  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === key) {
      bucket.splice(i, 1);
      return tuple[1];
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
