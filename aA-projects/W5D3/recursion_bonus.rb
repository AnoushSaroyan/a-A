#Problem 1: 

def sum_recur(array)
    return nil if array.empty?
    return array[0] if array.size == 1 
    array[0] + sum_recur(array[1..-1])
end

#Problem 2: 

def includes?(array, target)
    return false if array.empty?
    return true if target == array.first

    includes?(array[1..-1], target)
end


# Problem 3: 

def num_occur(array, target)
    return 0 if array.empty?

    (array[0] == target)? (1 + num_occur(array[1..-1], target)) : num_occur(array[1..-1], target)
end

# Problem 4: 

def add_to_twelve?(array)
    return false if array.size < 2

    (array.first + array.last == 12) || add_to_twelve?(array[1..-1])
end


# Problem 5: 

def sorted?(array)
     return true if array.size < 2

    (array[0] <= array[1]) && add_to_twelve?(array[1..-1])
end


# Problem 6: 

def reverse(string)
    return "" if string.empty?
    return string[0] if string.length == 1

    reverse(string[1..-1]) + string[0]
end
