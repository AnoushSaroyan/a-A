require_relative "piece"
require_relative "slideable"

class Queen < Piece
    include Slideable

    def symbol 
        #TODO
        # return the fancy symbol 
        color == :white ? "\u2655" : "\u265B"
    end        

    def move_dirs
        horizontal_dirs + diagonal_dirs
    end     


end     