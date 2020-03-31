/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  if (!root) return [];
  let queue = [root];
  let result = [];
  //   while (queue.length > 0) {
  //     let size = queue.length;

  // for (let i = 0; i < size; i++) {
  //   let node = queue.shift();
  //   if (node != null) {
  //     result += `, ${node.val}`;
  //     queue.push(node.left);
  //     queue.push(node.right);
  //   } else {
  //     result += `, null`;
  //   }
  // }
  while (queue.length > 0) {
    let size = queue.length;
    let level = [];
    for (let i = 0; i < size; i++) {
      let node = queue.shift();
      if (node != null) {
        result.push(node.val);
        queue.push(node.left);
        queue.push(node.right);
      } else {
        result.push("null");
      }
      result.push(",");
    }
  }
  return result;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  if (data.length < 1) return;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

let tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);
tree.right.left = new TreeNode(4);
tree.right.right = new TreeNode(5);

console.log(serialize(tree));
console.log("end");
