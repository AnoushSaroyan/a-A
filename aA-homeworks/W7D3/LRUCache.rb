  class LRUCache
    def initialize(size)
        @size = size
        @store = []
    end

    def count
      # returns number of elements currently in cache
      @store.count
    end

    def add(el)
      # adds element to cache according to LRU principle
      if @store.include?(el)
        @store.delete(el)
        @store << el  
      elsif size <= count 
        @store.shift
        @store << el  
      else  
        @store << el 
      end 
    end

    def show
      # shows the items in the cache, with the LRU item first
      @store
    end

    private
    # helper methods go here!
    attr_reader :store, :size 
  end