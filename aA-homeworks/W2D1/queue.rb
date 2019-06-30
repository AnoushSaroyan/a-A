class Queue
    attr_reader :store 
    
    def initialize
      # create ivar to store queue here!
      @store = Array.new 
    end

    def enqueue(el)
      # adds an element to the queue
      @store.unshift(el)
      self.store 
    end

    def dequeue
      # removes one element from the queue
      @store.pop 
    end

    def peek
      # returns, but doesn't remove, the top element in the queue
      self.store.last 
    end
end