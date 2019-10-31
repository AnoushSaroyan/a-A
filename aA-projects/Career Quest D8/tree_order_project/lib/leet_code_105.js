// View the full problem and run the test cases at:
//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

const { TreeNode } = require('./tree_node.js');


function buildTree(preorder, inorder) {
    if (!preorder.length && !inorder.length) return null;

    let rootVal = preorder.shift();
    let root = new TreeNode(rootVal);
    let rootIdx = inorder.indexOf(rootVal);

    let leftInorder = inorder.splice(0, rootIdx); // start with 0 index remove rootIdx count elements and return the removed part
    let rightInorder = inorder.slice(1); // removes all the element after 1 and return the removed part

    let leftPreorder = preorder.splice(0, rootIdx);
    let rightPreorder = preorder.splice(0); // removes all the elements from preorder

    root.left = buildTree(leftPreorder, leftInorder);
    root.right = buildTree(rightPreorder, rightInorder);
    return root;
}
