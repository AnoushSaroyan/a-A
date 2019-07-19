# Table name: actors
#
#  id   :bigint           not null, primary key
#  name :string           not null
#

# Table name: movies
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  yr          :integer          not null
#  score       :float            not null
#  votes       :integer          not null
#  director_id :integer          not null

# Table name: castings
#
#  id       :bigint           not null, primary key
#  actor_id :integer          not null
#  movie_id :integer          not null
#  ord      :integer          not null


def what_was_that_one_with(those_actors)
  # Find the movies starring all `those_actors` (an array of actor names).
  # Show each movie's title and id.
  Movie
    .select('movies.id, movies.title')
    .joins(:actors)
    .where(actors: { name: those_actors })
    .group(:id)
    .having('COUNT(actors.id) >= ?', those_actors.length)
end

def golden_age
  # Find the decade with the highest average movie score.
  Movie
    .select('AVG(score), yr - yr % 10 as decade')
    .group(:yr)
    .order('avg(score) DESC').first.decade
end

def costars(name)
  # List the names of the actors that the named actor has ever
  # appeared with.
  # Hint: use a subquery 812
  # Actor 
  #   .joins(:costars)
  #   .where.not(actors: { name: :name })
  #   .distinct

  Actor
    .joins(:costars)
    .where.not(actors: { name: name })
    .distinct
    .pluck(:name)


    # Actor.joins(:costars).where(name: 'Julie Andrew').distinct.pluck(:name)
end

# SELECT "actors".* FROM "actors" INNER JOIN "castings" ON "actors"."id" = "castings"."actor_id" INNER JOIN "movies" ON "castings"."movie_id" = "movies"."id" INNER JOIN "castings" "castings_costars" ON "movies"."id" = "castings_costars"."movie_id" WHERE "castings_costars"."actor_id" = $1

def actor_out_of_work
  # Find the number of actors in the database who have not appeared in a movie
  Actor
    .select(:name)
    .joins('LEFT OUTER JOIN castings on castings.actor_id = actors.id')
    .where(castings: { movie_id: nil })
    .count
end

def starring(whazzername)
  # Find the movies with an actor who had a name like `whazzername`.
  # A name is like whazzername if the actor's name contains all of the
  # letters in whazzername, ignoring case, in order.

  # ex. "Sylvester Stallone" is like "sylvester" and "lester stone" but
  # not like "stallone sylvester" or "zylvester ztallone"
  matcher = "%#{whazzername.split(//).join('%')}%"
  Movie.joins(:actors).where('UPPER(actors.name) LIKE UPPER(?)', matcher)
end

def longest_career
  # Find the 3 actors who had the longest careers
  # (the greatest time between first and last movie).
  # Order by actor names. Show each actor's id, name, and the length of
  # their career.
  Actor
    .select(:name, :id, 'MAX(movies.yr) - MIN(movies.yr) AS career')
    .joins(:movies)
    .order('career DESC, name')
    .group(:id)
    .limit(3)
end
