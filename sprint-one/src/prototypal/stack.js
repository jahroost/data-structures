var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.index = 0;
  someInstance.storage = {};
  return someInstance;
};

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


