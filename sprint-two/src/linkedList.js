var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var nodeToAdd = new Node(value);
    var currentNode = list.head;

    if (!currentNode) {
      list.tail = nodeToAdd;
      return nodeToAdd;
    }
  };

  list.removeHead = function() {
  };

  list.contains = function(target) {
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
