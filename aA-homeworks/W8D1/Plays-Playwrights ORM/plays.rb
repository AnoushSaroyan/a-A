require 'sqlite3'
require 'singleton'

class PlayDBConnection < SQLite3::Database
  include Singleton

  def initialize
    super('plays.db')
    self.type_translation = true #  makes sure that all the data we're getting back is the same data type as in the db 
    self.results_as_hash = true # returns the data as hash, default is array
  end
end

class Play
  attr_accessor :id, :title, :year, :playwright_id

  def self.all
    data = PlayDBConnection.instance.execute("SELECT * FROM plays")
    data.map { |datum| Play.new(datum) }
  end

  # ? is whatever the user has imputed, menaing it's the title, but using ? form to protect sql injection attacks
  def self.find_by_title(title)

    # passing the title attribute to sql query
    play = PlayDBConnection.instance.execute(<<-SQL, title) 
      SELECT * 
      FROM plays 
      WHERE plays.title = ? 
    SQL

    # data comes as an array by default [data]
    # if there is no play that has a given title, then return nil
    return nil if play.empty?

    # if the play isn't empty, then get the data (the first element in the array) and create a new Play instance using that data
    Play.new(play.first)
  end   

  # returns all plays written by playwright
  def self.find_by_playwright(name)
    playwright = Playwright.find_by_name(name)
    return nil unless playwright

    plays = PlayDBConnection.instance.execute(<<-SQL, playwright.id)
      SELECT *
      FROM plays
      WHERE playwright_id = ?
    SQL

    plays.map { |play| Play.new(play) } # a playwrighter can have many plays 
  end   

  def initialize(options)
    @id = options['id']
    @title = options['title']
    @year = options['year']
    @playwright_id = options['playwright_id']
  end

  def create
    raise "#{self} already in database" if self.id
    PlayDBConnection.instance.execute(<<-SQL, self.title, self.year, self.playwright_id)
      INSERT INTO
        plays (title, year, playwright_id)
      VALUES
        (?, ?, ?)
    SQL
    self.id = PlayDBConnection.instance.last_insert_row_id
  end

  def update
    raise "#{self} not in database" unless self.id
    PlayDBConnection.instance.execute(<<-SQL, self.title, self.year, self.playwright_id, self.id)
      UPDATE
        plays
      SET
        title = ?, year = ?, playwright_id = ?
      WHERE
        id = ?
    SQL
  end
end


class Playwright
  attr_accessor :id, :name, :birth_year

  def self.all
    data = PlayDBConnection.instance.execute("SELECT * FROM playwrights")
    data.map { |datum| Playwright.new(datum )}
  end   

  def self.find_by_name(name)
    playwright = PlayDBConnection.instance.execute(<<-SQL, name)
      SELECT * 
      FROM playwrights 
      WHERE name = ?
    SQL

    return nil if playwright.empty?
    Playwright.new(playwright.first)
  end   

  def initialize(options) # options is a hash
    @id = options['id']
    @name = options['name']
    @birth_year = options['birth_year']
  end   

  # inserts a new row into the playwrights table
  def create 
    raise "#{self} already in database" if self.id # makes sure the id doesn't exist already before inserting

    # binds the arguments: the values that we wanna trow in the instance variables
    PlayDBConnection.instance.execute(<<-SQL, self.name, self.birth_year) 
      INSERT INTO 
        playwrights (name, birth_year)
      VALUES    
        (?, ?)   
    SQL

    # once the above sql query is executed, we'll have playwrights.id that is set automatically by sqlite3 
    # so we can bind it with @id instance variable
    self.id = PlayDBConnection.instance.last_insert_row_id
  end 
  
  # updates a certain row
  def update 
    raise "#{self} not in database" unless self.id # makes sure the id exists before updating it

    PlayDBConnection.instance.execute(<<-SQL, self.name, self.birth_year, self.id)
      UPDATE playwrights
      SET 
        name = ?, birth_year = ? 
      WHERE 
        id = ?    
    SQL
  end   

  # returns all plays written by playwright
  def get_plays
    return nil unless self.id 

    plays = PlayDBConnection.instance.execute(<<-SQL, self.id)
      SELECT *
      FROM plays
      WHERE playwright_id = ?
    SQL

    plays.map { |play| Play.new(play) }
  end 
end   