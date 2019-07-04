require_relative "employee"

class Manager < Employee
   
    attr_accessor :employees
    def initialize(name, salary, title, boss)
        super
        @employees = []
    end
    
    def emp_salaries
        total = 0
        @employees.each do |employee|
            if employee.is_a?(Manager)
                total += employee.salary 
                total += employee.emp_salaries
            else
                total += employee.salary
            end
        end
        total
    end

    def bonus(multiplier)
        (self.emp_salaries) * multiplier
    end
end


