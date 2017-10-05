var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {
  add: function(item) {
    this._storage.push(item);
  },
  contains: function(item) {
    if (this._storage.includes(item)) {
      return true;
    } else {
      return false;
    }
  },
  remove: function(item) {
    delete this._storage[0];
  }
};

// setPrototype.add = function(item) {
//   this._storage.push(item);
// };
//
// setPrototype.contains = function(item) {
// };
//
// setPrototype.remove = function(item) {
// };

/*
 * Complexity: What is the time complexity of the above functions?
 */
