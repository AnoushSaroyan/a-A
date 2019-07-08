def my_uniq(arr)
    raise "argument must be an array" unless arr.is_a?(Array)
    seen = []
    arr.each { |el| seen << el unless seen.include?(el) }

    seen
end    
    

