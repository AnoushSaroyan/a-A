require "byebug"

def exp(base, e)
    return 1 if e == 0

    if e > 0
        base * exp(base, e - 1)
    else  
        1.0/base * exp(base, e + 1)    
    end     
end     

# p exp(1, 0) 
# p exp(5, 2) 
# p exp(6, 1) 
# p exp(6, 3) 
# p exp(2, -3)

def exp_2(base, e)              # base = 2, e = 4            base = 2, e = 2            base = 2, e = 1
    return 1 if e == 0  
    if e.even?                     # e is even                 e is even                e is odd
        exp_2(base, e / 2) ** 2     #   exp_2 (2, 2)  **2      exp_2(2, 1) **2
    else                             #    {4}**2                {2*2}                              {1}
        base * (exp_2(base, (e - 1) / 2) ** 2) #                                        2 * [exp_2(2, 0/2) ** 2]      e is 0
    end
end


# p exp_2(1, 2)  # 1^2 = 1      4**2               2 ** 2           2 * 1                 1 **2 = 1
# p exp_2(2, 4) # 16          exp_2(2,4) **2 -> exp_2(2,2) ** 2 -> base * exp_2(2,1) ** 2-> exp_2(2,0) **2



def deep_dup(arr)
    arr.map { |el| el.is_a?(Array) ? deep_dup(el) : el }   
end     


# robot_parts = [
#   ["nuts", [["bolts"]], "washers"],
#   ["capacitors", "resistors", "inductors"]
# ]

# robot_parts_copy = deep_dup(robot_parts)
# robot_parts[0][0] = "asdfa"
# p robot_parts[0][0].object_id
# p robot_parts_copy[0][0].object_id
# p robot_parts_copy.object_id == robot_parts.object_id


def fib(n)
    return [] if n == 0
    return [1] if n == 1
    return [1, 1] if n == 2

    arr = fib(n -1) # + fib(n-2)
    arr << arr[-1] + arr[-2]
    arr 
end     

def fib_2(n)
    return [1, 1].take(n) if n <= 2 #[0,1].take(2)  [0,1]
    prev_fib = fib_2(n - 1)
    prev_fib << prev_fib[-1] + prev_fib[-2]  #[0]
    prev_fib
end     

# p fib_2(1) # [1]
# p fib_2(2)          
# p fib_2(6)


def binary_search(arr, target)
    middle = arr.length / 2
    i = 0
    j = arr.length - 1
    while i < j
        if arr[middle] == target
            return middle 
        elsif arr[middle] < target 
            i = middle + 1
            middle = (i + j) / 2  
        else # middle el is greater than target 
            j = middle - 1
            middle = (i + j) / 2
        end
    end 
    return nil
end     

def binary_search_rec(arr, target)
    return nil if arr.length == 0

    middle = arr.length / 2 
                            
    if arr[middle] == target 
        return middle 
    elsif arr[middle] > target 
        prev_mid = binary_search_rec(arr[0...middle], target)      #[3] -> arr[0...midle-1] -> arr[0..-1]
    else # on the right part, nil 
        prev_mid = binary_search_rec(arr[(middle + 1)..-1], target) 
        if prev_mid.nil? 
            return nil 
        else  
            return middle + prev_mid + 1
        end  
    end  
end     

# p binary_search_rec([1, 2], 1) # 0
# p binary_search_rec([0, 1, 2, 3, 4, 5, 6, 7, 8], 0) # 0
# p binary_search_rec([0, 1, 2, 3, 4, 5, 6, 7, 8], 1) # -> sub [0, 1], sub[0] == arr[0] 
# p binary_search_rec([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)
# p binary_search_rec([0, 1, 2, 3, 4, 5, 6, 7, 8], 3)
# p binary_search_rec([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)
# p binary_search_rec([0, 1, 2, 3, 4, 5, 6, 7, 8], 5) # 2
# p binary_search_rec([0, 1, 2, 3, 4, 5, 6, 7, 8], 6) # 5
# p binary_search_rec([0, 1, 2, 3, 4, 5, 6, 7, 8], 7)
# p binary_search_rec([0, 1, 2, 3, 4, 5, 6, 7, 8], 8)
# p binary_search_rec([2, 3, 4, 5, 6, 7, 8, 9], 1) # nil  [9], 10 



def merge_sort(arr, &prc)
    return arr if arr.length == 1
    prc ||= Proc.new { |a, b| a <=> b }

    pivot = arr.length / 2

    left = arr.take(pivot)
    right = arr.drop(pivot)
    #p "left:  #{left}     right: #{right}"
    left_sorted = merge_sort(left, &prc)
    right_sorted = merge_sort(right, &prc)
    #p "left_sorted:  #{left_sorted}     right_sorted: #{right_sorted}"

    merge(left_sorted, right_sorted, &prc)
end

def merge(left, right, &prc) 
    merged = []
    until left.empty? || right.empty?
        case prc.call(left[0], right[0])
            when -1
                merged << left.shift
            when 0
                merged << left.shift
            when 1
                merged << right.shift
        end
    end
    merged + right + left
end

#p merge([6], [1, 2, 3, 4, 5]) { |a, b| a <=> b }
# p merge_sort([1, 4, 3, 6, 5, 1, 2]) 

def subsets(arr)
    return [[]] if arr.empty?

    subs = subsets(arr.take(arr.length-1)) 
    # p "subs #{subs} add #{arr.last} to each"
    subs + subs.map { |sub| sub + [arr.last] } # return value
end     

# p subsets([]) # => [[]]
# p subsets([1]) # => [[], [1]]  
# p subsets([1, 2]) # => [[], [1], [2], [1, 2]]
# p subsets([1, 2, 3]) # => [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]


def permutations(arr)
    return [arr] if arr.length == 1

    first = arr.shift 
    p "first : #{first}; array : #{arr}"
    perms = permutations(arr) 
    p "perms : #{perms}" 

    all_perms = []

    perms.each do |perm|
        (0..perm.size).each do |i|
            all_perms << perm.take(i) + [first] + perm.drop(i)
            #all_perms << perm.drop(i)
        end
    end    
    p "all_perms: #{all_perms}"
    all_perms  
end     

 
#p permutations([1]) 
#p permutations([1, 2]) #-> first = [1] arr =[2] -> [1, 2] [2, 1]

#p permutations([1, 2, 3]) # => [[1, 2, 3], [1, 3, 2],
                        #     [2, 1, 3], [2, 3, 1],
                        #     [3, 1, 2], [3, 2, 1]]


# 1 [2, 3] -> [2, 3] [3, 2] -> [1] + each of them
# 2 [1, 3] ->  [1, 3] [3, 1] -> [2] + each of them 
# 3 [1, 2] -> [1, 2] [2, 1] ->  [3] + each of them    


# immediately tries to use as many biggest as possible 
def greedy_make_change(amount, coins = [25, 10, 5, 1])
    change = []
    coins.each do |coin|
        count = amount / coin 
        count.times { change << coin }

        amount -= count * coin 
    end 
    
    change 
end   

def greedy_make_change_rec(amount, coins = [25, 10, 5, 1])
    change = []
    first_coin = coins[0]
    count = amount / first_coin 
    count.times { change << first_coin }

    amount -= count * first_coin

    if amount > 0 
        change = change + greedy_make_change_rec(amount, coins.drop(1)) # recursive call, drop the first coin 
    end

    change 
end

# p greedy_make_change_rec(99)

# make_better_change can work with any coins not just with American coins 
# make_better_change(14, [10, 7, 1])
# Best of: each coin + Best of: the change of the rest
# [10] + make_better_change(4) 
# [7] + make_better_change(7)
#[1] + make_better_change(13) 

$hit_debugger_one_time = true 
def make_better_change(amount, coins)
    return [] if amount == 0 

    # debugger 
    if $hit_debugger_one_time
        debugger
        $hit_debugger_one_time = false 
    end 
    #

    best_change = nil # best change is nill when we start first 
    coins.each do |coin|       
        next if coin > amount 

        change_for_rest = make_better_change(amount - coin, coins)
        change =  [coin] + change_for_rest 
        
        if best_change.nil? || change.count < best_change.count 
            best_change = change # change with the current coin is better than the best_change so reassign it 
        end     
    end 

    best_change
end     



p make_better_change(14, [10, 7, 1])