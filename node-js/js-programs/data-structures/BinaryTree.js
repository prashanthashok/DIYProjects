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
}

let t1 = new BinaryTree();
let arr = [5, 3, 10, 20, 21, 1];
t1.root = t1.constructTreeLevelOrder(arr, t1.root, 0);
t1.inOrder(t1.root);
