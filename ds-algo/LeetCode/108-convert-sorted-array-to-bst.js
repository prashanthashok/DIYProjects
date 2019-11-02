/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  return BSTHelper(nums, 0, nums.length - 1);
};

var BSTHelper = function(nums, left, right) {
  if (left > right) return null;

  const mid = Math.floor((left + right) / 2);
  const currentNode = new TreeNode(nums[mid]);
  currentNode.left = BSTHelper(nums, left, mid - 1);
  currentNode.right = BSTHelper(nums, mid + 1, right);
  return currentNode;
};
