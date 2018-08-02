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
    // I enhanced this one so that it will print tree structure (somewhat)
    if (node) {
      console.log("root:", node.data);
      console.log("left:", (node.leftChild) ? node.leftChild.data : null);
      console.log("right:", (node.rightChild) ? node.rightChild.data : null);
      console.log("=============");
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

  // Uses an in-order traversal to store the tree data in an array
  inOrderFeed(node) {
    if (node) {
      let arr = [];
      // Left child
      if (node.leftChild) {
        arr.push(...this.inOrderFeed(node.leftChild));
      }
      // Current node
      arr.push(node.data)
      // Right child
      if (node.rightChild) {
        arr.push(...this.inOrderFeed(node.rightChild));
      }
      return arr;
    }
  }

  // Delete all nodes in the tree
  emptyTree(node) {
    // left, right, root
    if (node) {
      if (node.leftChild) {
        this.emptyTree(node.leftChild);
        node.leftChild = null;
      }
      if (node.rightChild) {
        this.emptyTree(node.rightChild);
        node.rightChild = null;
      }
      node.data = null;
    }
    this.root = null;
  }

  // Builds a new tree from the array parameter
  buildTreeFromArray(arr) {
    if (arr.length === 1) {
      this.insert(bst.root, arr[0])
    }
    if (arr.length > 1) {
      var mid = Math.floor(arr.length / 2);
      this.insert(bst.root, arr[mid]);
      this.buildTreeFromArray(arr.slice(0, mid));
      this.buildTreeFromArray(arr.slice(mid + 1, arr.length));
    }
  }

  balance() {
    // Feeds the tree data into an array
    var arr = this.inOrderFeed(this.root);
    // Empties the tree
    this.emptyTree(this.root);
    // Rebuilds the tree in a more balanced way
    this.buildTreeFromArray(arr);
  }
}

var bst = new BinarySearchTree();

bst.insert(bst.root, 5);
bst.insert(bst.root, 10);
bst.insert(bst.root, 15);
bst.insert(bst.root, 20);
bst.insert(bst.root, 25);
bst.insert(bst.root, 30);
bst.insert(bst.root, 35);

// console.log("In order: ");
// bst.inOrderTraversal(bst.root);
console.log("Pre order: ");
bst.preOrderTraversal(bst.root);
// console.log("Post order: ")
// bst.postOrderTraversal(bst.root);

// var foo = bst.inOrderFeed(bst.root);
// console.log(foo);

bst.balance();

console.log("Pre order: ");
bst.preOrderTraversal(bst.root);