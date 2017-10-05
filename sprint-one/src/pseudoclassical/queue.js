var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.newestIndex = 0;
  this.oldestIndex = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.newestIndex] = value;
  this.newestIndex++;
};
Queue.prototype.dequeue = function() {
  var result = this.storage[this.oldestIndex];
  delete this.storage[this.oldestIndex];
  this.oldestIndex++;
  return result;
};
Queue.prototype.size = function() {
  if((this.newestIndex - this.oldestIndex) < 0) {
    return 0;
  }
  return this.newestIndex - this.oldestIndex;
};

