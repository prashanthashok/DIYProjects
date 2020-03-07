"use strict";
const LinkedList = require("./LinkedList.js");
const Node = require("./Node.js");

//Access HeadNode => list.getHead()
//Set the value of HeadNode => list.getHead()
//Check if list is empty => list.isEmpty()
//Insert at head => list.insertAtHead(value)
//Delete at head => list.deleteAtHead()
//Insert at tail => list.insertAtTail(value)
//Search for element => list.search(value)
//Delete by value => list.deleteVal(value)
//Node class { data ; Node nextElement;}

function reverse(list) {
  //Write your code here
  if (list.isEmpty()) return;

  let reversedList = list.getHead();
  let current = reversedList.nextElement;
  reversedList.nextElement = null;

  while (current) {
    let temp = current.nextElement;
    current.nextElement = reversedList;
    reversedList = current;
    current = temp;
  }

  // keep track of current
  // keep track of next element
  // reassign head after reversing each element

  return reversedList;
}

function reverse2(list) {
  if (list.isEmpty()) return;

  let previousNode = null;
  let nextNode = null;
  let currentNode = list.getHead();

  while (currentNode != null) {
    nextNode = currentNode.nextElement;
    currentNode.nextElement = previousNode;
    previousNode = currentNode;
    currentNode = nextNode;
  }
  return previousNode;
}

function findMid(list) {
  let midNode = null;
  //Write your code here
  if (list.isEmpty()) return;
  let mid = list.getHead();
  let end = mid;

  while (end.nextElement != null && end.nextElement.nextElement != null) {
    mid = mid.nextElement;
    end = end.nextElement.nextElement;
    if (end == null) break;
  }

  return mid;
}

function detectLoop(list) {
  let cycle = null; //Set to true or false
  //Write your code here

  if (list.isEmpty()) return;
  let visitedNodes = new Set();

  let currentNode = list.getHead();

  while (currentNode != null) {
    if (visitedNodes.has(currentNode)) {
      cycle = true;
      break;
    }
    visitedNodes.add(currentNode);
    currentNode = currentNode.nextElement;
    cycle = false;
  }
  return cycle;
}

function detectLoopWithTwoPointers(list) {
  if (list.isEmpty()) return;

  let oneStep = list.getHead();
  let twoStep = list.getHead();

  while (oneStep != null && twoStep != null && twoStep.nextElement != null) {
    oneStep = oneStep.nextElement;
    twoStep = twoStep.nextElement.nextElement;
    if (oneStep == twoStep) return true;
  }
  return false;
}

function removeDuplicates(list) {
  //Write your code here
  if (list.isEmpty()) return;

  let visitedNodes = new Set();

  let currentNode = list.getHead();
  let previousNode = list.getHead();
  while (currentNode != null) {
    if (visitedNodes.has(currentNode.data)) {
      previousNode.nextElement = currentNode.nextElement;
      currentNode = currentNode.nextElement;
      continue;
    }
    visitedNodes.add(currentNode.data);
    previousNode = currentNode;
    currentNode = currentNode.nextElement;
  }
  return list; //return the updated list here
}

//Returns a list containing the union of list1 and list2
function union(list1, list2) {
  // Write your code here
  if (list1.isEmpty() && list2.isEmpty()) return;
  if (list1.isEmpty()) return list2;
  if (list2.isEmpty()) return list1;

  let currentNode = list1.getHead();
  while (currentNode.nextElement != null) {
    currentNode = currentNode.nextElement;
  }
  currentNode.nextElement = list2.getHead();

  return list1.removeDuplicates();
}

//Returns a list containing the intersection of list1 and list2
function intersection(list1, list2) {
  let result = new LinkedList();
  // Write your code here

  if (list1.isEmpty() && list2.isEmpty()) return;
  if (list1.isEmpty()) return list2.removeDuplicates();
  if (list2.isEmpty()) return list1.removeDuplicates();
  list1 = list1.removeDuplicates();
  list2 = list2.removeDuplicates();

  let list1Node = list1.getHead();
  let visitedNodes = new Set();
  while (list1Node != null) {
    visitedNodes.add(list1Node.data);
    list1Node = list1Node.nextElement;
  }
  let list2Node = list2.getHead();
  while (list2Node != null) {
    if (visitedNodes.has(list2Node.data)) {
      result.insertAtTail(list2Node.data);
    }
    list2Node = list2Node.nextElement;
  }
  return result;
}

let list = new LinkedList();
list.insertAtHead(5);
list.insertAtHead(4);
list.insertAtHead(3);
list.insertAtHead(2);
list.insertAtHead(1);
// console.log(list);
// let reversedList = reverse2(list);
// console.log(reversedList);

let mid = findMid(list);
console.log(mid.data);
