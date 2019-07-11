require 'digest/sha1'

class Integer
  # Integer#hash already implemented for you
end

class Array
  def hash
    num = 0
    self.each_with_index do |el, i|
      num += (el.hash + i.hash) ^ 10
    end
    num
  end
end

class String
  def hash
    str = 0
    self.each_char.with_index do |char,i|
      str += (char.ord + i.hash)^10
    end
    str.hash

    # self.mb_chars.ord
    # num = 0
    # # self.each_char.with_index do |el, i|
    # #   num += (el.hash + i.hash) ^ 10
    # # end
    # num
    # 100.times do
    # end
    # 100.times { Digest::SHA1.hexdigest(self) }
  end
end

# x.report('hexadigest') { n.times { Digest::SHA1.hexdigest(str) } }

class Hash
  # This returns 0 because rspec will break if it returns nil
  # Make sure to implement an actual Hash#hash method
  def hash
    self.sort_by {|k,v| v}.hash
  end
end


# require 'digest/sha1'
# p Digest::SHA1.hexdigest("some string")