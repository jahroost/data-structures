var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.newestIndex = 0;
  someInstance.oldestIndex = 0;
  someInstance.storage = {};
  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.newestIndex] = value;
    this.newestIndex++;
  },
  dequeue: function() {
    var result = this.storage[this.oldestIndex];
    delete this.storage[this.oldestIndex];
    this.oldestIndex++
    return result;
  },
  size: function() {
    if ((this.newestIndex - this.oldestIndex) < 0) {
      return 0;
    }
    return this.newestIndex - this.oldestIndex;
  }
};


