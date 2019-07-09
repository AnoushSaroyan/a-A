# Dir["/pieces/*.rb"].each {|file| require file }
require 'require_all'

require_all 'pieces'

class Board
    attr_reader :grid

    def initialize(fill = true)
        @grid = Array.new(8) { Array.new(8, NullPiece.instance) }
        # @sentinel = NullPiece.instance
        fill_board if fill
    end   

    def [](pos)
        row, col = pos
        @grid [row][col]
    end

    def []=(pos, value)
        row, col = pos
        @grid[row][col] = value
    end

    def move_piece(color, start_pos, end_pos)
        if self[start_pos].empty?
            raise "Please select a piece!"
        end  
        
        piece = self[start_pos]
        if piece.color != color
            raise "That is not your piece, please try again"
        end     
        
        raise "not a valid move: moving into check" unless piece.valid_moves.include?(end_pos)
        
        move_piece!(color, start_pos, end_pos)
    end

    def valid_pos?(pos) # [x, y]
        pos.all? { |x| x.between?(0, 7) }
    end 

    def add_piece(piece, pos)
        if self[pos].empty? 
            self[pos] = piece
        else  
            raise "Position is not empty."    
        end
    end

    def checkmate?(color)
        # our king doesn't have any pos that is not in check
        return false unless in_check?(color)
        
        pieces.each do |piece|
            moves = pieces.moves 
            moves.each do |move|
                new_board = self.dup
                new_board.move_piece!(piece.color, piece.pos, move)
                return false if !new_board.in_check?(color)
            end     
        end     
        true
    end 
    
    def in_check?(color) # if our king's pos is included in opponents moves 
        king_pos = find_king(color)
        pieces.each do |piece|
            # opponent's piece
            if piece.color != color 
                moves = piece.moves 
                if moves.include?(king_pos) 
                    return true 
                end
            end     
        end   
        false  
    end 
    
    def find_king(color)
        piece_arr = pieces
        piece_arr.select {|ele| ele.is_a?(King) && ele.color == color}
    end 
    
    def pieces 
        @grid.flatten.select { |field| !field.empty? }
    end 
    
    def dup 
        new_board = Board.new(false)
        pieces.each do |piece|
            new_p = piece.class.new(piece.color, new_board, piece.pos)
            new_board.add_piece(new_p, piece.pos)
        end
        new_board
    end 
    
    def move_piece!(color, start_pos, end_pos)
        piece = self[start_pos]
        self[start_pos] = NullPiece.instance
        piece.pos = end_pos
    end    
    

    private

    #attr_reader :sentinel

    def fill_board
        # for each color 
        colors = [:W, :B]
        colors.each do |color|

        # fill the pawns 
        row = (color == :B)? 1 : 6

        8.times do |col|
            @grid[row][col] = Pawn.new(color, @grid, [row, col])
        end     
        
        # fill the back row 
        back_pieces = [Rook, Knight, Bishop, Queen, King, Bishop, Knight, Rook]

        row = (color == :B)? 0 : 7
        back_pieces.each_with_index { |piece, col| @grid[row][col] = piece.new(color, @grid, [row, col]) }
        end     
    end 
end


if __FILE__ == $PROGRAM_NAME
    board = Board.new
end     