/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    
        
        result=inOrder(root, []);
        return result[k-1];
    };
    
    const inOrder = function(node, result) {
    if(!node) return result;
        if(node.left) inOrder(node.left, result);
        result.push(node.val);
        if(node.right) inOrder(node.right, result);
        return result;
    };



module.exports = kthSmallest;