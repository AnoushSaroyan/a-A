require_relative 'db_connection'
require_relative '01_sql_object'

module Searchable
  def where(params) 

    where_line = params.keys.map { |key| "#{key} = ?"}.join(" AND ")
    values = params.values
    # p "passing"
    # p "FROM #{self.table_name} WHERE (#{where_line})"
    results = DBConnection.execute(<<-SQL, *values)
      SELECT *
      FROM #{self.table_name}
      WHERE #{where_line}
    SQL

    results.map do |record|
      self.new(record)
    end
  end
end

class SQLObject
  # Mixin Searchable here...
  extend Searchable
end
