require_relative 'db_connection'
require 'active_support/inflector'


class SQLObject
  def self.columns
    return @columns if @columns
    @columns = DBConnection.execute2(<<-SQL).first
      SELECT *
      FROM '#{self.table_name}'
    SQL
    @columns.map!(&:to_sym)
  end

  def self.finalize!
    self.columns.each do |column|
      define_method(column) do 
        self.attributes[column] #getter
      end   

      define_method("#{column}=") do |value|
        self.attributes[column] = value # setter
      end  
    end   
  end

  def self.table_name=(table_name)
    @table_name = table_name
  end

  def self.table_name
    @table_name ||= self.name.to_s.downcase + "s"
  end

  def self.all
    results = DBConnection.execute(<<-SQL)
      SELECT *
      FROM '#{self.table_name}'
    SQL

    self.parse_all(results)
  end

  def self.parse_all(results)
    results.map do |record|
      self.new(record)
    end
  end

  def self.find(id)
    results = DBConnection.execute(<<-SQL, id).first
        SELECT *
        FROM '#{self.table_name}'
        WHERE id = ?
    SQL
    
    return nil if results.nil?
    self.new(results)
  end

  def initialize(params = {})
    params.each do |k, v|
      raise "unknown attribute '#{k}'" if !self.class.columns.include?(k.to_sym)
      self.send("#{k.to_sym}=", v)
    end 
    # puts self.class.name
    # self.class.finalize!
  end

  def attributes
    @attributes ||= {}
  end

  
  def attribute_values 
    self.attributes.keys.map{ |attr| self.send(attr) } 
  end

  def insert
    len = attribute_values.length
    question_marks = "("

    (len - 1).times{question_marks += "?, "}
    question_marks += "?)"
    column_names = "("

    self.class.columns.drop(1).each do |column|
      column_names += column.to_s + ","
    end
    column_names = column_names[0...-1] + ")"
    
    DBConnection.execute(<<-SQL, *attribute_values)
      INSERT INTO #{self.class.table_name}
        #{column_names}
      VALUES #{question_marks}
    SQL

    self.id = DBConnection.last_insert_row_id
  end

  def update
    set = self.class.columns[1..-1].map{ |col| col.to_s + " = ?" }.join(", ")

    DBConnection.execute(<<-SQL, *attribute_values[1..-1], self.id)
      UPDATE #{self.class.table_name}
      SET #{set}
      WHERE id = ?
    SQL
  end

  def save
    if self.id
      update
    else
      insert
    end
  end
end
