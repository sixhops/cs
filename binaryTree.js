class TreeNode {
  constructor(data) {
    this.leftChild = null;
    this.rightChild = null;
    this.data = data;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(node, data) {
    // If the tree is empty, return a new node
    //  This should only ever occur once!
    if (this.root === null) {
      this.root = new TreeNode(data);
      return node;
    }

    // Otherwise, recurse down the tree
    if (data < node.data && node.leftChild === null) {
      // Set left child directly...
      node.leftChild = new TreeNode(data);
    } else if (data < node.data) {
      // ...or recurse if its already set.
      node.leftChild = this.insert(node.leftChild, data);
    } else if (data > node.data && node.rightChild === null) {
      // Set the right child directly...
      node.rightChild = new TreeNode(data);
    } else if (data > node.data) {
      // ...or recurse if its already set.
      node.rightChild = this.insert(node.rightChild, data);
    }
    // return the node pointer
    return node;
  }

  preOrderTraversal(node) {
    // root, left, right
    console.log(node.data);
    if (node) {
      if (node.leftChild) {
        this.preOrderTraversal(node.leftChild);
      }
      if (node.rightChild) {
        this.preOrderTraversal(node.rightChild);
      }
    }
  }

  inOrderTraversal(node) {
    // left, root, right
    if (node) {
      if (node.leftChild) {
        this.inOrderTraversal(node.leftChild);
      }
      console.log(node.data);
      if (node.rightChild) {
        this.inOrderTraversal(node.rightChild);
      }
    }
  }

  postOrderTraversal(node) {
    // left, right, root
    if (node) {
      if (node.leftChild) {
        this.postOrderTraversal(node.leftChild);
      }
      if (node.rightChild) {
        this.postOrderTraversal(node.rightChild);
      }
      console.log(node.data);
    }
  }
}

var bst = new BinarySearchTree();

bst.insert(bst.root, 100);
bst.insert(bst.root, 40);
bst.insert(bst.root, 175);
bst.insert(bst.root, 53);
bst.insert(bst.root, 201);
bst.insert(bst.root, 16);
bst.insert(bst.root, 151);

console.log("In order: ");
bst.inOrderTraversal(bst.root);
console.log("Pre order: ");
bst.preOrderTraversal(bst.root);
console.log("Post order: ")
bst.postOrderTraversal(bst.root);
