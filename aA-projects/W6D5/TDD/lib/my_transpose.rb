def my_transpose(arr)
    transposed = []

    arr.count.times do |i|
        transposed << arr.each.map { |sub| sub[i] }
    end     

    transposed
end    