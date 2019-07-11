class HashSet
  attr_accessor :count, :num_buckets, :store

  def initialize(num_buckets = 8)
    @num_buckets = num_buckets
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(key)

    resize! if @store.length <= @count

    unless include?(key)
      self[key.hash] << key
      @count += 1 
    end 
  

  end

  def include?(key)
    self[key.hash].include?(key)
  end

  def remove(key)
    if include?(key)
      self[key.hash].delete(key)
      @count -= 1
    end
 
  end

  private

  def [](key)
    # optional but useful; return the bucket corresponding to `key`
    idx = key % @num_buckets
    @store[idx]
  end

  def num_buckets
    @store.length
  end

  def resize!
      counts = 0
      new_buckets = @num_buckets * 2
      new_store = Array.new(new_buckets) { Array.new }

      @store.flatten.each do |key|
        counts += 1
        idx = key % new_buckets
        new_store[idx] << key
      end 

      
      @num_buckets = new_buckets
      @store = new_store
      @count = counts
  end
end
