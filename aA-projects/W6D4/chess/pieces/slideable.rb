module Slideable
    def horizontal_dirs
        HORIZONTAL_DIRS
    end 
    
    def diagonal_dirs
        DIAGONAL_DIRS
    end 
    
    def moves 
        next_moves = []
        y, x = pos
            move_dirs.each do |ele|
                loop do 
                    new_pos = [y + ele[0], x + ele[1]]
                    
                    break if !board.valid_pos?(new_pos) || board[new_pos].color == color
                    next_moves << new_pos 
                    break if board[new_pos].color != color
                end 
            end
        next_moves
    end 
    
    private 
    HORIZONTAL_DIRS = [[0,1],[0,-1],[1,0],[-1,0]]

    DIAGONAL_DIRS = [[1,1],[-1,-1],[1,-1],[-1,1]]    

end

