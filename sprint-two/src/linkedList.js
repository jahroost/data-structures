var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var nodeToAdd = new Node(value);
    var currentNode = list.head;

    if (!currentNode) {
      list.head = nodeToAdd;
      list.tail = nodeToAdd;
    } else {
      list.tail.next = nodeToAdd;
      list.tail = nodeToAdd;
    }
  };

  list.removeHead = function() {
    var currentNode = list.head;
    list.head = currentNode.next;
    return currentNode.value;
  };

  list.contains = function(target) {
    var currentNode = list.head;
    while (currentNode) {
      if (currentNode.value === target) {
        return true;
      } else {
        currentNode = currentNode.next;
      }
    }
    return false;
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
