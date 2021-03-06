"use strict";
const LinkedList = require("./LinkedList.js");
const Node = require("./Node.js");
const Queue = require("./Queue.js");
const Graph = require("./Graph.js");
const Stack = require("./Stack.js");

//Create Queue => let queue = new Queue(5), where 5 is size of queue
//Functions of Queue => queue.enqueue(int), queue.dequeue(), queue.isEmpty()
//Breadth First Traversal of Graph g from source vertex
function bfsTraversal(g, source) {
  let result = "";
  let num_of_vertices = g.vertices;
  // Write code here
  let vertexMap = new Map();
  let queue = new Queue();
  queue.enqueue(source);
  while (!queue.isEmpty()) {
    let vertex = queue.dequeue();
    // traverse adjacency list of vertex
    let adjacents = g.list[vertex].getHead();
    while (adjacents != null) {
      // add each adjacent vertex to queue
      queue.enqueue(adjacents.data);
      adjacents = adjacents.nextElement;
    }
    //add source to vertexMap and mark as visited
    if (!vertexMap.has(vertex)) {
      result += vertex;
      vertexMap.set(vertex, true);
    }
  }
  return result;
}

function dfsTraversal(g, source) {
  let result = "";
  let num_of_vertices = g.vertices;
  // Write code here
  let vertexMap = new Map();
  let stack = new Stack(g.vertices);

  stack.push(source);

  while (!stack.isEmpty()) {
    let vertex = stack.pop();

    let adjacents = g.list[vertex].getHead();
    while (adjacents != null) {
      stack.push(adjacents.data);
      adjacents = adjacents.nextElement;
    }

    if (!vertexMap.has(vertex)) {
      result += vertex;
      vertexMap.set(vertex, true);
    }
  }
  return result;
}

<<<<<<< HEAD
function numEdges(g) {
  let sum = 0;
  //Write code here
  let numVertices = g.vertices;
  for (let i = 0; i < numVertices; i++) {
    let adjacents = g.list[i].getHead();
    while (adjacents != null) {
      sum++;
      adjacents = adjacents.nextElement;
    }
  }
  return sum;
}

// let g1 = new Graph(6);
// g1.addEdge(1, 2);
// g1.addEdge(1, 3);
// g1.addEdge(2, 4);
// g1.addEdge(2, 5);
// console.log(bfsTraversal(g1, 1));
=======
function detectCycle(g) {
  let numVertices = g.vertices;
  let visited = Array(numVertices).fill(false);
  let recursion = Array(numVertices).fill(false);

  for (let i = 0; i < numVertices; i++) {
    if (isCyclic(g, i, visited, recursion)) {
      return true;
    }
  }
  return false;
}

function isCyclic(g, data, visited, recursion) {
  if (recursion[data]) return true;
  if (visited[data]) return false;

  visited[data] = true;
  recursion[data] = true;

  let adjacents = g.list[data].getHead();
  while (adjacents != null) {
    if (isCyclic(g, adjacents.data, visited, recursion)) return true;
    adjacents = adjacents.nextElement;
  }

  recursion[data] = false;
  return false;
}

let g1 = new Graph(6);
g1.addEdge(1, 2);
g1.addEdge(1, 3);
g1.addEdge(2, 4);
g1.addEdge(2, 5);
console.log(bfsTraversal(g1, 1));
>>>>>>> 59957b375413e1531af1f845f82f1e3f0a142c5d

// console.log(dfsTraversal(g1, 1));

// let g = new Graph(5);
// g.addEdge(0, 1);
// g.addEdge(0, 2);
// g.addEdge(1, 3);
// g.addEdge(1, 4);
// console.log(dfsTraversal(g, 0)); //Should output 01342

let g = new Graph(9);
g.addEdge(0, 2);
<<<<<<< HEAD
g.addEdge(0, 5);
g.addEdge(2, 3);
g.addEdge(2, 4);
g.addEdge(5, 3);
g.addEdge(5, 6);
g.addEdge(3, 6);
g.addEdge(6, 7);
g.addEdge(6, 8);
g.addEdge(6, 4);
g.addEdge(7, 8);

console.log(numEdges(g));
=======
g.addEdge(1, 3);
g.addEdge(1, 4);
console.log(dfsTraversal(g, 0)); //Should output 01342

let g2 = new Graph(6);
g2.addEdge(0, 1);
g2.addEdge(1, 2);
g2.addEdge(3, 4);
g2.addEdge(4, 5);

console.log(detectCycle(g2));
g2.addEdge(5, 3);
console.log(detectCycle(g2));
>>>>>>> 59957b375413e1531af1f845f82f1e3f0a142c5d
