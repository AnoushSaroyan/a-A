# Dir["/pieces/*.rb"].each {|file| require file }
require 'require_all'

require_all 'pieces'

class Board
    attr_reader :grid

    def initialize
        @grid = Array.new(8) { Array.new(8, NullPiece.instance) }
        # @sentinel = NullPiece.instance
        fill_board
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
        
        piece = board[start_pos]
        if piece.color != color
            raise "That is not your piece, please try again"
        end     
        
        #TODO 
        # check if the piece.moves include the end pos
        # check for the valid movie

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
    end 
    
    def in_check?(color)
    end 
    
    def find_king(color)
    end 
    
    def pieces 
        @grid.flatten.select { |field| !field.empty? }
    end 
    
    def dup 

    end 
    
    def move_piece!(color, start_pos, end_pos)
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