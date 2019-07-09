require_relative "board"
require "colorize"
require_relative "cursor"

class Display
    attr_reader :cursor
    def initialize(board)
        @board = board 
        @cursor = Cursor.new([0,0], board)
    end     

    def render
        symbols = @board.grid.map.with_index do |row, i|
            row.map.with_index do |piece, ii|
                color = colorize_piece([i, ii])
                piece.to_s.colorize(:background => color)
            end 
        end  
        symbols.each do |row|
            puts row.join(" ")
        end
        # position = @cursor.get_input
        # if @cursor.selected 
        #     position

        # end
        # system("clear")
        end
    end     

    def colorize_piece(pos) # piece has a pos
        if cursor.cursor_pos == pos
            :light_blue
        elsif cursor.cursor_pos == pos && cursor.selected
            :light_yellow
        elsif pos.sum.even?
            :grey
        else   
            :pink
        end      
    end     
     
end

# ok its good now nice and cleaned up it was cause we had print in front of dis.render
# good job, lol
#thank you couldnt have done it without you 
# thank you!
# if __FILE__ == $PROGRAM_NAME
#     board = Board.new
#     dis = Display.new(board)
#     dis.render
# end     
  