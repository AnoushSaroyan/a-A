class Board
  attr_accessor :cups

  def initialize(name1, name2)
    @name1 = name1
    @name2 = name2
    @cups = Array.new(14) { Array.new }
    place_stones
  end

  def place_stones
    # helper method to #initialize every non-store cup with four stones each 
    # skip the own cups
    @cups.length.times do |i|
      next if i == 13 || i == 6

      4.times { @cups[i] << :stone }
    end   
  end

  def valid_move?(start_pos)
    if start_pos < 0 || start_pos > 12
      raise "Invalid starting cup"
    end   

    if @cups[start_pos].empty?
      raise "Starting cup is empty"
    end   
  end

  def make_move(start_pos, current_player_name)

    stones = @cups[start_pos]
    @cups[start_pos] = [] # empty the current cup 

    # distribute the stones from the current cup 
    current_cup_idx = start_pos
    while !stones.length.zero?
      current_cup_idx += 1 
      current_cup_idx = current_cup_idx % 14

      # if the current_player is the first player 
      if current_cup_idx == 6 
        @cups[6] << stones.pop if current_player_name == @name1
      
      #if the current_player is the second player  
      elsif current_cup_idx == 13 
        @cups[13] << stones.pop if current_player_name == @name2
      else   
        @cups[current_cup_idx] << stones.pop 
      end     
    end   

    render 
    next_turn(current_cup_idx)
  end

  def next_turn(ending_cup_idx)
    # helper method to determine whether #make_move returns :switch, :prompt, or ending_cup_idx
    
    # if ended on it's own cup, then start again 
    if [6, 13].member?(ending_cup_idx)
      return :prompt

    # if ended on an empty cup(that now has one stone in it), then switch the turns
    elsif @cups[ending_cup_idx].size == 1 
      :switch 

    # there are some stones left, so must start at that position   
    else   
      ending_cup_idx
    end  
  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
    @cups[0..5].all?(&:empty?) || @cups[7..12].all?(&:empty?)
  end

  def winner
    store_1 = @cups[6].size
    store_2 = @cups[13].size

    return :draw if store_1 == store_2

    (store_1 > store_2)? @name1 : @name2
  end
end
