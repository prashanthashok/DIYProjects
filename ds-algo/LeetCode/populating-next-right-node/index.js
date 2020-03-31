/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  levelOrder(root);
  return root;
};

var levelOrder = function(root) {
  //I need a queue to track the next nodes
  //while the queue is not empty
  //dequeue, add element to result array
  //enqueue left and right children of each dequeued node to the queue
  if (!root) return;
  let queue = [root];
  root.next = null;
  let prevRightNode;
  let numOfNodes = 1;
  while (queue.length > 0) {
    let node = queue.shift();
    if (node.left) {
      queue.push(node.left);
      node.left.next = node.right;
      numOfNodes++;
    }
    if (node.right) {
      queue.push(node.right);
      numOfNodes++;
      //Property of a perfect binary tree, # of nodes for a perfect binary tree = 2^height of the tree - 1.
      //At each level if numOfNodes = 2^h -1
      //or if numOfNodes+1 = 2^h (is a power of 2),
      //then node.right is the last of that level, else we still have more
      if (isPowerOfTwo(numOfNodes + 1)) {
        node.right.next = null;
      } else {
        node.right.next = prevRightNode;
      }
      prevRightNode = node.right;
    }
  }
};

const isPowerOfTwo = function(n) {
  return n >= 2 && (n & (n - 1)) == 0;
};
