var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
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
var size = 0;
var stackMethods = {
  // push: function(value) {
  //   this.size++;
  // },
  // pop: function() {
  //   this.size--;
  // },
  // size: function() {
  //   return this.size;
  // }
};

stackMethods.push = function(value) {
  this.storage[size] = value;
  size++;
}
stackMethods.pop =function() {
  size--;
  var result = this.storage[size];
  delete this.storage[size];
  return result;
}
stackMethods.size = function() {
  if (size < 0) {
    size = 0;
  }
  return size;
}