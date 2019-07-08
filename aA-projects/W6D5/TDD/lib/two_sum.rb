def two_sum(arr)
    pairs = []

    (0...arr.count).each do |i|
        (i + 1...arr.count).each do |ii|
            pairs << [i, ii] if arr[i] + arr[ii] == 0
        end 
    end 
    pairs

end 