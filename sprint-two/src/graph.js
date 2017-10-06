

// Instantiate a new graph
var Graph = function() {
  this.storage = [];
  this.edges = [];
  // this.index = 0;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage.push(node);
  // this.edges[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var i = 0; i < this.storage.length; i++) {
    if (this.storage[i] === node) {
      return true;
    } else {
      return false;
    }
  }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var deleted;
  for (var i = 0; i < this.storage.length; i++) {
    if (this.storage[i] === node) {
      deleted = this.storage[i];
      // this.storage.splice(i);
      delete this.storage[i];
    }
  }
  if (deleted) {
    for (var i = 0; i < this.edges.length; i++) {
      if (this.edges[i].includes(node)) {
        this.edges[i].splice(i, 2);
      // delete this.edges[i][i];
      }
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var found = false;
  for (var i = 0; i < this.edges.length; i++) {
    // if ((this.edges[i][i] === fromNode && this.edges[i][i + 1] === toNode) || this.edges[i][i] === toNode && this.edges[i][i + 1] === fromNode){
    if (this.edges[i].includes(fromNode) && this.edges[i].includes(toNode)) {
      found = true;
    }
  }
  return found;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges.push([fromNode, toNode]);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.edges.length; i++) {
    // if (this.edges[i][i] === fromNode && this.edges[i][i + 1] === toNode) {
    //   this.edges[i].splice(i, 2);
    // }
    if (this.edges[i].includes(fromNode) && this.edges[i].includes(toNode)) {
      this.edges[i].splice(i, 2);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var i = 0; i < this.storage.length; i++) {
    cb(this.storage[i]);
  }
};
