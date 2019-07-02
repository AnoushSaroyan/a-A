require "set"

class GraphNode
    attr_accessor :val, :neighbors

    def initialize(val)
        self.val = val
        self.neighbors = []
    end  
end

def depth_first(node, visited = Set.new)

    # return nil if this node has already been visited
    return nil if (visited.include?(node.val))

    # the node hasn't yet been visited,
    puts node.val
    visited.add(node.val)

    # then explore each of its neighbors
    node.neighbors.each do |neighbor|
        depth_first(neighbor, visited)
    end    
end


def bredth_first(node, target_value)
    visited = Set.new
    queue = [node]

    while !queue.empty?
        current_node = queue.shift

        if !visited.include?(current_node)
            return current_node if current_node.val == target_value

            queue += current_node.neighbors
            visited.add(current_node)
        end     
    end 
    
    nil
end 

# a = GraphNode.new('a')
# b = GraphNode.new('b')
# c = GraphNode.new('c')
# d = GraphNode.new('d')
# e = GraphNode.new('e')
# f = GraphNode.new('f')
# a.neighbors = [b, c, e]
# c.neighbors = [b, d]
# e.neighbors = [a]
# f.neighbors = [e]

# depth_first(f) # f, e, a, c, b, d
# p bredth_first(a, "b") # b
# p bredth_first(a, "f") # nil
