class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {

    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }
    let current = this.root;
    while (current) {
      if (val < current.val) {
        if (current.left === null) {
          current.left = new Node(val);
          return this;
        }
        else {
          current = current.left;
        }
      }
      else if (val > current.val) {
        if (current.right === null) {
          current.right = new Node(val);
          return this;
        }
        else {
          current = current.right;
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, currentNode = this.root) {

    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }
    if (val < currentNode.val) {
      if (currentNode.left === null) {
        currentNode.left = new Node(val);
        return this;
      }
      return this.insertRecursively(val, currentNode.left);
    }
    else {
      if (currentNode.right === null) {
        currentNode.right = new Node(val);
        return this;
      }

      return this.insertRecursively(val, currentNode.right);
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {

    if (this.root === null) return;

    let current = this.root;
    while (current) {
      if (current.val === val) {
        return current;
      }
      else if (val < current.val) {
        if (current.left === null) {
          return;
        }
        else {
          current = current.left;
        }
      }
      else {
        if (current.right === null) return;
        else {
          current = current.right;
        }
      }
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, current = this.root) {

    if (this.root === null) return;
    if (current.val === val) return current;
    if (val < current.val) {
      if (current.left === null) return;
      else {
        return this.findRecursively(val, current.left);
      }
    }
    else {
      if (current.right === null) return;
      else {
        return this.findRecursively(val, current.right);
      }
    }
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {

    // let preOrderArray = [];
    // let current = this.root;
    // while (current) {
    //   preOrderArray.push(current.val);
    //   console.log(preOrderArray);
    //   if (current.left) {

    //     current = current.left;
    //     console.log("Current left", current);
    //   }
    //   else if (current.right) {
    //     current = current.right;
    //     console.log("Current right", current);
    //   }
    //   else { return; }
    // }
    // console.log(preOrderArray);
    // return preOrderArray;
    let data = [];
    let current = this.root
    function traversePreOrder(node) {
      if (node === null) return;
      data.push(node.val);
      (node.left) && traversePreOrder(node.left);
      (node.right) && traversePreOrder(node.right);
    }
    traversePreOrder(current);
    return data;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {

    let data = [];
    let current = this.root;

    function traverseInOrder(node) {

      if (node === null) return;

      node.left && traverseInOrder(node.left);
      data.push(node.val);
      node.right && traverseInOrder(node.right);
    }

    traverseInOrder(current);
    return data;

  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let data = [];
    let current = this.root;

    function traverseInOrder(node) {

      if (node === null) return;

      node.left && traverseInOrder(node.left);

      node.right && traverseInOrder(node.right);
      data.push(node.val);
    }

    traverseInOrder(current);
    return data;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let node = this.root;
    let queue = [];
    let data = [];
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    return data;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {

  }
}

module.exports = BinarySearchTree;
