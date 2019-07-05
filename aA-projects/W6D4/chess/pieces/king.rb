require_relative "piece"
require_relative "stepable"

class King < Piece 
    include Stepable
    def move_difs
        [ 
        [1, 1], [1, -1], 
        [-1, 0], [0, -1], 
        [-1, 1], [0, 1], 
        [1, 0], [-1,-1] 
        ]
    end

    def symbol 
        color == :white ? "\u2654" : "\u265A"
    end 
end




