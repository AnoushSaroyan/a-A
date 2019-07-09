module Stepable

    def moves
        next_moves = []
        x, y = pos
            move_diffs.each do |ele|
                new_pos = [x + ele[0], y + ele[1]]
                if board.valid_pos?(new_pos) && board[new_pos].color != color
                    next_moves << new_pos
                end 
            end
        next_moves
    end

end


#kings_moves.moves(start_pos) => [[],[],[],[]]