class Simon
  COLORS = %w(red blue green yellow)

  attr_accessor :sequence_length, :game_over, :seq

  def initialize
    @sequence_length = 1
    @game_over = false 
    @seq = []
  end

  def play
    # unitl the game is not over, take turn 
    until @game_over
      self.take_turn
      system("clear") # clean the terminal from all the fancy messages before taking the next turn 
    end

    # game is over here 
    self.game_over_message
    self.reset_game
  end

  def take_turn
    self.show_sequence # will print out all the colors for a specific timeframe 
    self.require_sequence # will check all the inputed colors against the colors in the seq

    # if the round was successful, then require_sequence method will not assign to @game_over to true value
    unless @game_over
      self.round_success_message
      @sequence_length += 1
    end   

  end

  def show_sequence
    self.add_random_color

    # show every color in the seq for certain time frame and then hide it ( system("clear") )
    @seq.each do |color|
      puts color 
      sleep 0.7
      system("clear") # hide the color 
      sleep 0.2
    end   
  end

  def require_sequence
    @seq.each do |color|
      if color[0] != gets.chomp
        @game_over = true 
        break
      end   
    end   
  end

  def add_random_color
    self.seq << %w(red blue yellow green).sample 
  end

  def round_success_message
    puts "Congrats! The round was successful! Lets see how you'll play the next sequence!"
  end

  def game_over_message
    puts "You lost! You failed to re-create the given sequence!"
  end

  def reset_game
    @seq = []
    @game_over = false
    @sequence_length = 1
  end
end


if __FILE__ == $PROGRAM_NAME 
  simon = Simon.new
  simon.play
end   