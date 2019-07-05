require_relative "piece"
require_relative "stepable"

class Knight < Piece
    include Stepable

    def move_diffs 
        [
        [2, 1], [1, 2],
        [-2, -1], [-1, -2],
        [2, -1], [1, -2],
        [-2, 1], [-1, 2] 
        ]
    end

    
    def symbol 
        color == :white ? "\u2658" : "\u265E"
    end      
end