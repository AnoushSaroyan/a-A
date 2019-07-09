require "singleton"
require_relative "piece"

class NullPiece < Piece
    attr_reader :symbol
    include Singleton

    def initialize
        @color = nil 
        @symbol = " "
    end    
    
    # doesn't have any moves
    def moves 
        []
    end     

end     