require_relative "piece"

class Pawn < Piece

    def symbol 
        color == :white ? "\u2659" : "\u265F" 
    end 

    def moves
        forward_steps + side_attacks
    end
    
    private 

    def at_start_row? # [row + forward_dir, col] 
        white_start = 6
        black_start = 1
        if self.color == :W
            return pos[0] == white_start 
        else  
            return pos[0] == black_start
        end           
    end 

    
    def forward_dir
        color == :B ? 1 : -1 
    end 
    
    def forward_steps 
        row, col = pos #[row, col]
        forward_moves = []
        pos_1 = [row + forward_dir, col]
 
        forward_moves << pos_1 if board[pos_1].empty? && valid_pos(pos_1)

        if self.at_start_row?
            pos_2 = [row + 2 * forward_dir, col] 
            forward_moves << pos_2 if board[pos_2].empty? && valid_pos(pos_2)
        end

        forward_moves
    end
    
    def side_attacks 

        row, col = pos 

        #side_moves = []

        pos_1 = [row + forward_dir, col + 1] # right opp pawn 
        pos_2 = [row + forward_dir, col - 1]
        side_moves = [pos_1, pos_2]

        side_moves.reject { |pos| !board.valid_pos?(pos) && !board[pos].empty? && board[pos].color != color }
    end   
end     


# if pos + [1,1] || [1, -1] == enemy piece we can move there 


#if a non matching color piece is one space diag pawn can move there 
#pawn moves one space unless pos == start space 
#if it does then 2 spaces on first move 
