/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  let queue = [];
  let traversal = [];
  console.log(root);
  if (!root) return [];
  let level = 0;
  queue.push(root);
  traversal.push([root.val]);
  while (queue.length > 0) {
    const node = queue.shift();
    let children = [];
    //traversal[level++] = [node.val];
    if (node.left) {
      queue.push(node.left);
      children.push(node.left.val);
      //console.log(children);
    }
    if (node.right) {
      queue.push(node.right);
      children.push(node.right.val);
      //console.log(children);
    }
    if (children.length > 0) {
      //console.log(children);
      traversal.push(children);
    }
  }
  //console.log(traversal);
  return traversal;
};
