require_relative '03_associatable'

# class Cat < SQLObject
#   belongs_to :human, :foreign_key => :owner_id
#   has_one_through :home, :human, :house

#   finalize!
# end

# class Human < SQLObject
#   self.table_name = "humans"

#   belongs_to :house

#   finalize!
# end

# class House < SQLObject
#   finalize!
# end

# cat.house # => generats the following query


# SELECT
#   houses.*
# FROM
#   humans
# JOIN
#   houses ON humans.house_id = houses.id
# WHERE
#   humans.id = ?


# Phase IV
module Associatable
  # Remember to go back to 04_associatable to write ::assoc_options

  def has_one_through(name, through_name, source_name)
  
    define_method(name) do
      # generating the through options
      through_options = self.class.assoc_options[through_name]
      through_table = through_options.table_name
      through_pk = through_options.primary_key
      through_fk = through_options.foreign_key

      # generating the source options
      source_options = through_options.model_class.assoc_options[source_name]
      source_table = source_options.table_name
      source_pk = source_options.primary_key
      source_fk = source_options.foreign_key
      
      self_fk = self.send(through_fk)
      results = DBConnection.execute(<<-SQL, self_fk)
        SELECT
          #{source_table}.*
        FROM
          #{through_table}
        JOIN
          #{source_table}
        ON
          #{through_table}.#{source_fk} = #{source_table}.#{source_pk}
        WHERE
          #{through_table}.#{through_pk} = ?
      SQL

      source_options.model_class.parse_all(results).first
    end
  end
end



