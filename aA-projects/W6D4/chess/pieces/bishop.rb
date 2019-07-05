require_relative "piece"
require_relative "slideable"

class Bishop < Piece
    include Slideable

    def symbol 
        #TODO
        # return the fancy symbol
        color == :white ? "\u2657" : "\u265C"
    end        

    def move_dirs
        diagonal_dirs
    end     



end