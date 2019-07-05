require_relative "board"
require "colorize"

class Display

    def initialize(board)
        @board = board 
    end     

    def render 
        symbols = []
        @board.grid.each do |array|
            symbols << array.map do |ele|
                ele.to_s
            end 
        end
        symbols.each do |row|
            puts row.join(" ")
        end
    end     
     
end

# ok its good now nice and cleaned up it was cause we had print in front of dis.render
# good job, lol
#thank you couldnt have done it without you 
# thank you!
if __FILE__ == $PROGRAM_NAME
    board = Board.new
    dis = Display.new(board)
    dis.render
end     

# def render 
#     @board.grid.map do |row|
#         row.map 
#         { |array| array.to_s }
    
# end     