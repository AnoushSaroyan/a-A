require "byebug"
class MaxIntSet
  attr_reader :max, :store
  def initialize(max)
    @max = max
    @store = Array.new(max, false)
  end

  def insert(num)
    raise "Out of bounds" unless num.between?(0, max)
    @store[num] = true
  end

  def remove(num)
    @store[num] = false
  end

  def include?(num)
    @store[num]
  end

  private

  def is_valid?(num)
    num.between?(0, max)
  end

  def validate!(num)
  end
end


class IntSet
  attr_reader :store, :num_buckets
  def initialize(num_buckets = 20)
    @num_buckets = num_buckets
    @store = Array.new(num_buckets) { Array.new }
  end


  def insert(num)
    idx = num % @num_buckets
    @store[idx] << num    
  end

  def remove(num) 
    idx = num % @num_buckets
    @store[idx].delete(num)   
  end

  def include?(num)
    @store.any? { |arr| arr.include?(num) }
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
  end

  def num_buckets
    @store.length
  end
end

class ResizingIntSet
  attr_accessor :count, :num_buckets, :store

  def initialize(num_buckets = 20)
    @num_buckets = num_buckets
    @store = Array.new(@num_buckets) { Array.new }
    @count = 0 # @count is the number of items
  end

  def insert(num)
    # debugger
    resize! if @store.length <= @count
  
    idx = num % @num_buckets
    unless include?(num) 
      @store[idx] << num  
      @count += 1 
    end
  end

  def count
    @count
  end   

  def remove(num)
    idx = num % @num_buckets
    if include?(num)
      @store[idx].delete(num)
      @count -= 1
    end     
  end

  def include?(num)
    @store.any? { |bucket| bucket.include?(num) }
  end

  # def inspect
  #   @store.inspect
  # end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
    idx = num % @num_buckets
    @store[idx]
  end

  def num_buckets
    @store.length
  end

  def resize!
    # debugger
    # if @store.length < @count
      counts = 0
      new_buckets = @num_buckets * 2
      new_store = Array.new(new_buckets) { Array.new }

      @store.flatten.each do |num|
        counts += 1
        idx = num % new_buckets
        new_store[idx] << num
      end 

      
      @num_buckets = new_buckets
      @store = new_store
      @count = counts

    # end
    # if @store.length > @count
    #   @num_buckets *= 2 
    #   # @num_buckets.times 
    # end
  end


end
