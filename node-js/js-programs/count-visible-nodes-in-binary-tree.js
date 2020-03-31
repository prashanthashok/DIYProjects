class Node {
  constructor(value) {
    this.val = value; //value of the Node
    this.left = null; //leftChild (will also be of the Node class)
    this.right = null; //rightChild (will also be of the Node class)
  }
}

class BinaryTree {
  constructor(value) {
    this.root = new Node(value);
  }

  constructTreeLevelOrder(arr, root, i) {
    if (i < arr.length) {
      let temp = new Node(arr[i]);
      root = temp;
      root.left = this.constructTreeLevelOrder(arr, root.left, 2 * i + 1);
      root.right = this.constructTreeLevelOrder(arr, root.right, 2 * i + 2);
    }
    return root;
  }

  // Function to print tree nodes in InOrder fashion
  inOrder(root) {
    if (root != null) {
      this.inOrder(root.left);
      console.log(root.val + " ");
      this.inOrder(root.right);
    }
  }

  dfs(root) {
    let stack = [root];
    let visible = [root.val];
    while (stack.length > 0) {
      let node = stack.pop();
      if (node.left != null) {
        stack.push(node.left);
        if (node.val < node.left.val) visible.push(node.left.val);
      }
      if (node.right != null) {
        stack.push(node.right);
        if (node.val < node.right.val) visible.push(node.right.val);
      }
      console.log(node.val);
    }
    return visible;
  }
  countVisible(root) {}
}

let t1 = new BinaryTree();
let arr = [5, 3, 10, 20, 21, 1];
t1.root = t1.constructTreeLevelOrder(arr, t1.root, 0);
//t2.inOrder(t2.root);
let visible = t1.dfs(t1.root);
console.log("====================");
console.log(visible);

let t2 = new BinaryTree();
let arr2 = [-10, null, -15, null, -1];
t2.root = t2.constructTreeLevelOrder(arr2, t2.root, 0);
//t2.inOrder(t2.root);
let visible2 = t2.dfs(t2.root);
console.log("====================");
console.log(visible2);
