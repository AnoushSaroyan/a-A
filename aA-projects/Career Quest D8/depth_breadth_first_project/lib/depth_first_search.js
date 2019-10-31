function depthFirstSearch(root, targetVal) {
    let stack = [root];
    while (stack.length) {
        let node = stack.pop();

        if (node.val === targetVal) return node;
        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left); // we'll push the left element after pushing the right one, 
            // so that when we po pfrom the stack we'll get the left child first
    }

    return null;
}


module.exports = {
    depthFirstSearch
};