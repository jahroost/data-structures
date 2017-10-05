var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    index: 0,
    storage: {}
  };
  _.extend(someInstance, stackMethods);
  return someInstance;
}

// var extend = function(to, from) {
//   for (var key in from) {
//     to[key] = from[key];
//   }
// }
var stackMethods = {
  push: function(value) {
    this.storage[this.index] = value;
    this.index++;
  },
  pop: function() {
    if (this.index > 0) {
      this.index--;
      var result = this.storage[this.index];
      delete this.storage[this.index];
      return result;
    }
  },
  size: function() {
    return this.index;
  }
};

// stackMethods.push = function(value) {
//   this.storage[index] = value;
//   index++;
// }
// stackMethods.pop = function() {
//   if (index > 0) {
//     index--;
//     var result = this.storage[index];
//     delete this.storage[index];
//     return result;
//   }
// }
// stackMethods.size = function() {
//   return index;
// }







