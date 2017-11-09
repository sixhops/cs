
class TreeNode {
  constructor(data) {
    this.leftChild = null;
    this.rightChild = null;
    this.data = data;
  }
  // getData() {
  //   return this.data;
  // }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Insert a new node with given data
  insert(node, data) {
    // If the tree is empty, return a new node
    if (node === null) return new TreeNode(data);

    // Otherwise, recurse down the tree
    if (data < node.data) {
      node.leftChild = insert(node.leftChild, data);
    } else if (data > node.data) {
      node.rightChild = insert(node.rightChild, data);
    }
    // return the (unchanged) node pointer
    return node;
  }

  inOrderTraversal() {
    // left, root, right
    
  }
}

var bst = new BinarySearchTree();

bst.insert(100);
bst.insert(40);
bst.insert(175);
