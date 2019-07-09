require "set"

# O(n^2)
def sluggish_octopus(fishes)
    max_fish = fishes.first

    (0...fishes.count).each do |i|
        (0...fishes.count).each do |ii|
            next if i == ii  
            max_fish = fishes[ii] if fishes[ii].length > max_fish.length
        end 
    end 

    max_fish
end     

# merge_sort has O(n log n) asymptotic worst case runtime
class Array
  #this should look familiar
  def merge_sort(&prc)
    prc ||= Proc.new { |x, y| x <=> y }

    return self if count <= 1

    mid = count / 2
    sorted_left = self.take(mid).merge_sort(&prc)
    sorted_right = self.drop(mid).merge_sort(&prc)

    Array.merge(sorted_left, sorted_right, &prc)
  end

  private
  def self.merge(left, right, &prc)
    merged = []

    until left.empty? || right.empty?
      case prc.call(left.first, right.first)
      when -1
        merged << left.shift
      when 0
        merged << left.shift
      when 1
        merged << right.shift
      end
    end

    merged + right + left 
  end
end

# O(n log n), will use merge_sort
def dominant_octopus(fishes)
    prc = Proc.new { |f1, f2| f1.length <=> f2.length }
    sorted_fishes = fishes.merge_sort(&prc)
    sorted_fishes[-1]
end     


# O(n)
def clever_octopus(fishes)
    max_fish = fishes.first

    (0...fishes.count).each do |i|
        max_fish = fishes[i] if fishes[i].length > max_fish.length 
    end 

    max_fish
end     

# O(n)
# tiles_array = ["up", "right-up", "right", "right-down", "down", "left-down", "left",  "left-up" ]
def slow_dancing_octopus(direction, tiles_array)
    tiles_array.each_with_index do |tile, i|
        return i if tile == direction
    end     
end     


#O(1)
tiles_hash = {
    "up" => 0,
    "right-up" => 1,
    "right"=> 2,
    "right-down" => 3,
    "down" => 4,
    "left-down" => 5,
    "left" => 6,
    "left-up" => 7
}

def fast_dancing_octopus(direction, tiles_hash)
  tiles_hash[direction]
end

# p fast_dancing_octopus("down", tiles_hash)
