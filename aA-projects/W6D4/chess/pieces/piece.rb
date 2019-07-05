# Piece is an abstruct class 
class Piece 
    attr_reader :color, :board
    attr_accessor :pos 
    
    def initialize(color, board, pos)
        @color, @board, @pos = color, board, pos
    end  

    # def pos=(val)
    #     board[pos] = val 
    # end     

    def to_s
        "#{symbol}"
    end 
    
    def empty?
    end 
    
    def valid_moves
        
    end    
    
    # def symbol
    #     symbol
    # end     
    
    private 

    def move_into_check?(end_pos)
        board.move_piece(pos, end_pos)
        board.in_check?(color)
    end     
end     