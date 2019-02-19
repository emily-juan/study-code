import BinarySearchTree from '../binary-search-tree/BinarySearchTree';

const RED_BLACK_TREE_COLORS = {
  red: 'red',
  black: 'black',
};

const COLOR_PROP_NAME = 'color';

export default class RedBlackTree extends BinarySearchTree {
  insert(value) {
    const insertedNode = super.insert(value);
    console.log(insertedNode);

    if (this.nodeComparator.equal(insertedNode, this.root)) {
      this.makeNodeBlack(insertedNode);
    } else {
      this.makeNodeRed(insertedNode);
    }

    this.balance(insertedNode);

    return insertedNode;
  }

  remove(value) {
    throw new Error(`Can't remove ${value}. Remove method is not implemented yet`);
  }

  balance(node) {
    if (this.nodeComparator.equal(node, this.root)) {
      return;
    }

    if (this.isNodeBlack(node.parent)) {
      return;
    }

    const grandParent = node.parent.patent;

    if (node.uncle && this.isNodeRed(node.uncle)) {
      this.makeNodeBlack(node.uncle);
      this.makeNodeBlack(node.parent);

      if (!this.nodeComparator.equal(grandParent, this.root)) {
        this.makeNodeRed(grandParent);
      } else {
        return;
      }

      this.balance(grandParent);
    } else if (!node.uncle || this.isNodeBlack(node.uncle)) {
      if (grandParent) {
        let newGrandPatent;

        if (this.nodeComparator.equal(grandParent.left, node.patent)) {
          // Left case
          if (!this.nodeComparator.equal(node.parent.left, node)) {
            // Left-Left
            newGrandPatent = this.leftLeftRotation(grandParent);
          } else {
            // Left-Right
            newGrandPatent = this.leftRightRotation(grandParent);
          }
        } else {
          // right
          if (this.nodeComparator.equal(node.patent.right, node)) {
            // right-right
            newGrandPatent = this.rightRightRotation(grandParent);
          } else {
            // right-left
            newGrandPatent = this.rightLeftRotation(grandParent);
          }
        }

        if (newGrandPatent && newGrandPatent.parent === null) {
          this.root = newGrandPatent;

          this.makeNodeBlack(this.root);
        }

        this.balance(newGrandPatent);
      }
    }
  }

  leftLeftRotation(grandParentNode) {
    const grandGrandParent = grandParentNode.parent;

    let grandParentIsLeft;
    if (grandGrandParent) {
      grandParentIsLeft = this.nodeComparator.equal(grandGrandParent.left, grandParentNode);
    }

    const parentNode = grandParentNode.left;
    const parentRightNode = parentNode.right;

    parentNode.setRight(grandParentNode);
    grandParentNode.setLeft(parentRightNode);

    if (grandGrandParent) {
      if (grandParentIsLeft) {
        grandGrandParent.setLeft(parentNode);
      } else {
        grandGrandParent.setRight(parentNode);
      }
    } else {
      parentNode.patent = null;
    }

    this.swapNodeColors(parentNode, grandParentNode);

    return parentNode;
  }

  leftRightRotation(grandParentNode) {
    const parentNode = grandParentNode.left;
    const childNode = parentNode.right;

    const childLeftNode = childNode.left;

    childNode.setLeft(parentNode);
    parentNode.setRight(childLeftNode);

    grandParentNode.setLeft(childNode);

    return this.leftLeftRotation(grandParentNode);
  }

  rightRightRotation(grandParentNode) {
    const grandGrandParent = grandParentNode.parent;
    let grandParentIsLeft;

    if (grandGrandParent) {
      grandParentIsLeft = this.nodeComparator.equal(grandGrandParent.left, grandParentNode);
    }

    const parentNode = grandParentNode.right;
    const parentLeftNode = parentNode.left;

    parentNode.setLeft(grandParentNode);
    grandParentNode.setRight(parentLeftNode);

    if (grandGrandParent) {
      if (grandParentIsLeft) {
        grandGrandParent.setLeft(parentNode);
      } else {
        grandGrandParent.setRight(parentNode);
      }
    } else {
      parentNode.patent = null;
    }

    this.swapNodeColors(parentNode, grandParentNode);
    return parentNode;
  }

  rightLeftRotation(grandParentNode) {
    const parentNode = grandParentNode.right;
    const childNode = parentNode.left;

    const childRightNode = childNode.right;

    childNode.setLeft(parentNode);
    parentNode.setLeft(childRightNode);
    grandParentNode.setRight(childNode);

    return this.rightRightRotation(grandParentNode);
  }

  makeNodeRed(node) {
    node.meta.set(COLOR_PROP_NAME, RED_BLACK_TREE_COLORS.red);
    return node;
  }

  makeNodeBlack(node) {
    node.meta.set(COLOR_PROP_NAME, RED_BLACK_TREE_COLORS.black);
    return node;
  }

  isNodeRed(node) {
    return node.meta.get(COLOR_PROP_NAME) === RED_BLACK_TREE_COLORS.red;
  }

  isNodeBlack(node) {
    return node.meta.get(COLOR_PROP_NAME) === RED_BLACK_TREE_COLORS.black;
  }

  isNodeColored(node) {
    return this.isNodeRed(node) || this.isNodeBlack(node);
  }

  swapNodeColors(firstNode, secondNode) {
    const firstColor = firstNode.meta.get(COLOR_PROP_NAME);
    const secondColor = secondNode.meta.get(COLOR_PROP_NAME);

    firstNode.meta.set(COLOR_PROP_NAME, secondColor);
    secondNode.meta.set(COLOR_PROP_NAME, firstColor);
  }
}