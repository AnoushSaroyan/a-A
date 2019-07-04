# PHASE 2
def convert_to_int(str)
  begin
    num = Integer(str)
  rescue ArgumentError 
    puts "Please input a valid numeric string!"
  ensure 
    num ||= nil 
  end     
  
  num
end

# PHASE 3
FRUITS = ["apple", "banana", "orange"]

class CoffeError < StandardError
  def message 
    puts "Monstors are not allowed to have a lot of caffeine. Feed me a fruit."
  end   
end 

class FruitError < StandardError
  def message
    puts "We need furits instead!"
  end
end

def reaction(maybe_fruit)
  if FRUITS.include?(maybe_fruit)
    puts "OMG, thanks so much for the #{maybe_fruit}!"
  elsif maybe_fruit == "coffee"
    raise CoffeeError
  else
    raise FruitError
  end 
end

def feed_me_a_fruit
  begin
    puts "Hello, I am a friendly monster. :)"

    puts "Feed me a fruit! (Enter the name of a fruit:)"
    maybe_fruit = gets.chomp
    reaction(maybe_fruit) 
  rescue CoffeError => e
    puts e.message 
    retry 
  rescue FruitError => e
    puts e.message
  end     
end  

# PHASE 4
class BestFriend
  def initialize(name, yrs_known, fav_pastime)
    @name = name
    @yrs_known = yrs_known
    @fav_pastime = fav_pastime
    if @yrs_known < 5
      raise "Years known is too small!"
    end
    if @name.empty?
      raise  "Please give us a name!"
    end
    if @fav_pastime.empty?
      raise "Why dont you have a fav pastime?!"
    end
  end

  def talk_about_friendship
    puts "Wowza, we've been friends for #{@yrs_known}. Let's be friends for another #{1000 * @yrs_known}."
  end

  def do_friendstuff
    puts "Hey bestie, let's go #{@fav_pastime}. Wait, why don't you choose. 😄"
  end

  def give_friendship_bracelet
    puts "Hey bestie, I made you a friendship bracelet. It says my name, #{@name}, so you never forget me." 
  end
end


