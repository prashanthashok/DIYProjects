/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (!root) return 0;
  let t = 0;

  root.children.forEach(child => {
    t = Math.max(maxDepth(child), t);
  });
  return t + 1;
};
