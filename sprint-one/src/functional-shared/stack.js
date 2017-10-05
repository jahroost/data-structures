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
var index = 0;
var stackMethods = {
  // push: function(value) {
  //   this.index++;
  // },
  // pop: function() {
  //   this.index--;
  // },
  // index: function() {
  //   return this.index;
  // }
};

stackMethods.push = function(value) {
  this.storage[index] = value;
  index++;
}
stackMethods.pop =function() {
  index--;
  var result = this.storage[index];
  delete this.storage[index];
  return result;
}
stackMethods.size = function() {
  if (index < 0) {
    index = 0;
  }
  return index;
}