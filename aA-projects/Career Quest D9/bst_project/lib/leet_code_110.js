// View the full problem and run the test cases at:
//  https://leetcode.com/problems/balanced-binary-tree/


var isBalanced = function (root) {
    if (!root) return true;

    const heightDiff = Math.abs(height(root.left) - height(root.right));
    return heightDiff <= 1 && isBalanced(root.right) && isBalanced(root.left);
};

var height = function (root) {
    if (!root) return 0;

    let leftHeight = 1 + height(root.left);
    let rightHeight = 1 + height(root.right);

    return leftHeight > rightHeight ? leftHeight : rightHeight;
}