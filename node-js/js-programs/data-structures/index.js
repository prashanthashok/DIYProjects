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

let g1 = new Graph(6);
g1.addEdge(1, 2);
g1.addEdge(1, 3);
g1.addEdge(2, 4);
g1.addEdge(2, 5);
console.log(bfsTraversal(g1, 1));

console.log(dfsTraversal(g1, 1));

let g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(1, 4);
console.log(dfsTraversal(g, 0)); //Should output 01342
