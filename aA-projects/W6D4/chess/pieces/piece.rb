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
        if self.is_a?(NullPiece)
            true
        else
            false
        end
    end 
    
    def valid_moves
        moves.select { |move| !move_into_check?(end_pos) }
    end    
    
    # def symbol
    #     symbol
    # end     
    
    private 

    def move_into_check?(end_pos)
        board_dupped = @board.dup
        board_dupped.move_piece(pos, end_pos)
        board_dupped.in_check?(color)
    end     
end     