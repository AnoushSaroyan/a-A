class Stack
    attr_reader :store 
    
    def initialize
      # create ivar to store stack here!
      @store = [] 
    end

    def push(el)
      # adds an element to the stack
      @store.push(el)
      self.store 
    end

    def pop
      # removes one element from the stack
      @store.pop 
    end

    def peek
      # returns, but doesn't remove, the top element in the stack
      self.store.first 
    end
end