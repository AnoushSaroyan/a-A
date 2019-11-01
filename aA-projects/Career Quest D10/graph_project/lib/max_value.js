function maxValue(node, visited=new Set()) {
    if (visited.has(node)) return -Infinity;
    visited.add(node);
    // console.log(visited);

    let maxNeighbors = node.neighbors.map(neighbor => maxValue(neighbor, visited));
    // console.log(maxNeighbors);
    // console.log(node.val, ...maxNeighbors);
    return Math.max(node.val, ...maxNeighbors);
}

module.exports = {
    maxValue
};