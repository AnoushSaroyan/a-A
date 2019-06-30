require "byebug"

class Map
    attr_reader :store 
    
    def initialize()
        # create ivar to store map here
        @store = Array.new # my_map = [[k1, v1], [k2, v2], [k3, v2], ...]
    end

    def count 
        self.store.count 
    end     

    def [](idx)
        self.store[idx]
    end    

    def <<(el)
        self.store << el  
    end     

    def has_key?(key)
        self.store.any? { |pair| pair.first == key }
    end  
    
    def update(key, new_value)
        # assigns a new value to the given key and returns true if the assignment was successful
        return false unless self.has_key?(key)
        count.times do |i|
            if self[i][0] == key 
                self[i][1] = new_value 
            end 
        end       
        
        return true
    end     

    def set(key, value)
        # either creates a new key-value pair or updates the value for a pre-existing key in the map    
        if self.has_key?(key)
            self.update(key, value)
        else  
            self << [key, value]    
        end 
        
        self.show 
    end

    def delete(key)
        # deletes the element from the map that corresponds to the given key in the map 
        # returns a boolean to indicate whether or not it was successful
        return false unless self.has_key?(key)
        el = self.store.select { |el| el.first == key }.first

        self.store.delete(el)
        return true
    end

    def get(key)
        # returns the value that corresponds to the given key in the map
        self.store.each do |pair|
            return pair.last if pair.first == key 
        end 
        
        return nil 
    end     

    def show
        # returns the map i guess
        self.store 
    end
end
