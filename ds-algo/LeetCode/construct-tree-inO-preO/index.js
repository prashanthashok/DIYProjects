function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
}

var buildTree = function(preorder, inorder) {
    
    let tree = null;
    return constructTree(tree, preorder, inorder)
};

const constructTree = function(tree, preO, inO) {
    
    if(preO.length < 1 || inO.length < 1) return;
    if(!tree){
        tree = new TreeNode(preO.shift());
        let curr = tree;
        let idx = inO.indexOf(tree.val);
        let leftSubTree = inO.slice(0, idx);
        tree.left = constructTree(curr.left, preO, leftSubTree);
        let rightSubTree = inO.slice(idx+1);
        tree.right = constructTree(curr.right, preO, rightSubTree);
        return tree;
    }
}

module.exports = buildTree;