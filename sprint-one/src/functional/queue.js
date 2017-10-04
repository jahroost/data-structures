var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var oldestIndex = 0;
  var newestIndex = 0

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[newestIndex] = value;
    newestIndex++;
  };

  someInstance.dequeue = function() { 
    var result = storage[oldestIndex];
    delete storage[oldestIndex];
    oldestIndex++;
    return result;
  };

  someInstance.size = function() {
    if ((newestIndex - oldestIndex) < 0) {
      return 0
    }
    return newestIndex - oldestIndex;
  };

  return someInstance;
};
