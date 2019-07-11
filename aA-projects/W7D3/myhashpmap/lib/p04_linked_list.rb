require "byebug"
class Node
  attr_reader :key
  attr_accessor :val, :next, :prev

  def initialize(key = nil, val = nil)
    @key = key
    @val = val
    @next = nil
    @prev = nil
  end

  def to_s
    "#{@key}: #{@val}"
  end

  def remove
    # optional but useful, connects previous link to next link
    # and removes self from list.
  end
end

class LinkedList
  include Enumerable
  def initialize
    @head = Node.new()
    @tail = Node.new()
    @head.next = @tail
    @tail.prev = @head
  end

  def [](i)
    each_with_index { |link, j| return link if i == j }
    nil
  end

  def first
    @head.next
  end

  def last
    @tail.prev
  end

  def empty?
    @head.next == @tail
  end

  def get(key)
    each do |link| 
      if link.key == key 
        return link.val 
      end   
    end   
    return nil
  end

  def include?(key)
    each
  end

  def append(key, val)
    new_node = Node.new(key, val)

    # nil<-head ->..... <-last_node-> <-new_node-> <-tail->nil
    @tail.prev.next = new_node 
    new_node.prev = @tail.prev 
    new_node.next = @tail 
    @tail.prev = new_node

  end

  def update(key, val)
    each do |link|
      if link.key == key
        link.val = val
      end
    end
    
  end

  def remove(key)
    
  end

  def each
    current = @head.next
    until current == @tail
      # prc.call(current)
      yield current
      current = current.next 
    end
  end

  # uncomment when you have `each` working and `Enumerable` included
  def to_s
    inject([]) { |acc, link| acc << "[#{link.key}, #{link.val}]" }.join(", ")
  end
end


# k_v = { first: 1, second: 2, third: 3 }