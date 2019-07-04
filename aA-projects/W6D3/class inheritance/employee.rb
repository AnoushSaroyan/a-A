class Employee
    attr_reader :name, :salary, :title, :boss
    
    def initialize(name, salary, title, boss)
        @name = name
        @salary = salary
        @title = title
        @boss = boss
    end     
    
    def bonus(multiplier)
        return self.salary * multiplier 
        
    end
    
end     


