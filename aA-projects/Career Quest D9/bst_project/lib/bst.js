class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


class BST {
    constructor() {
        this.root = null;
    }

    insert(val, root = this.root) {
        let newNode = new TreeNode(val);

        if (!root) {
            this.root = newNode;
            return;
        }

        if (val < root.val) {
            if (!root.left) {
                root.left = newNode;
            } else {
                this.insert(val, root.left)
            }
        } else {
            if (!root.right) {
                root.right = newNode;
            } else {
                this.insert(val, root.right)
            }
        }
    }

    searchRecur(val, root = this.root) {
        if (!root) return false;

        if (val < root.val) {
            return this.searchRecur(val, root.left);
        } else if (val > root.val) {
            return this.searchRecur(val, root.right);
        } else {
            return true; // val === root.val
        }
    }

    searchIter(val) {
        let currentNode = this.root;

        while (currentNode) {
            if (val < currentNode.val) {
                currentNode = currentNode.left;
            } else if (val > currentNode.val) {
                currentNode = currentNode.right;
            } else {
                return true;
            }
        }

        return false;
    }
}

module.exports = {
    TreeNode,
    BST
};