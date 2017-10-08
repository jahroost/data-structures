
var BinarySearchTree = function(value) {
  var someInstance = Object.create(BinarySearchTree.prototype);
  someInstance.value = value;
  someInstance.right = undefined;
  someInstance.left = undefined;
  return someInstance;
};

BinarySearchTree.prototype.insert = function (value) {
  var node = BinarySearchTree(value);
  var insertNode = function(tree) {
    if (tree.value > value && tree.left === undefined) {
      tree.left = node;
    } else if (tree.value > value) {
      insertNode(tree.left);
    } else if (tree.value < value && tree.right === undefined) {
      tree.right = node;
    } else if (tree.value < value) {
      insertNode(tree.right);
    }
  };
  // console.log(this)
  insertNode(this);
};

BinarySearchTree.prototype.contains = function (value) {
  var doesContain = false;
  var containsNode = function(tree) {
    if (tree.value === value) {
      doesContain = true;
    } else if (tree.left !== undefined && value < tree.value) {
      containsNode(tree.left);
    } else if (tree.right !== undefined && value > tree.value) {
      containsNode(tree.right);
    }
  };
  containsNode(this);
  return doesContain;
};

BinarySearchTree.prototype.depthFirstLog = function (callback) {
  var cbOnTree = function(tree) {
    callback.call(tree, tree.value);

    if (tree.left !== undefined) {
      cbOnTree(tree.left);
    }

    if (tree.right !== undefined) {
      cbOnTree(tree.right);
    }
  };
  cbOnTree(this);
};
