require_relative "piece"
require_relative "slideable"
class Rook < Piece
    include Slideable
    
    def symbol 
        #TODO
        # return the fancy symbol 
        color == :white ? "\u2656" : "\u265C"
    end        

    def move_dirs
        horizontal_dirs
    end     

end
