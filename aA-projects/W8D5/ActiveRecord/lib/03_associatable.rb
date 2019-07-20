require_relative '02_searchable'
require 'active_support/inflector'

# Phase IIIa
class AssocOptions
  attr_accessor :foreign_key, :class_name, :primary_key

  def model_class
    @class_name.constantize
  end

  def table_name
    # @class_name.to_s.downcase + "s"
    model_class.table_name
  end
end

#
# options = BelongsToOptions.new(:owner, :class_name => "Human")
# options.class_name # => "Human"
# # should call `Human::table_name`
# options.table_name # => "humans"
#
class BelongsToOptions < AssocOptions
  def initialize(name, options = {})
    @foreign_key = options[:foreign_key] || (name.to_s + "_id").to_sym
    @primary_key = options[:primary_key] || :id
    @class_name = options[:class_name] || name.to_s.camelcase
  end
end


class HasManyOptions < AssocOptions
  def initialize(name, self_class_name, options = {})
    @class_name = options[:class_name] || name.to_s.camelcase.singularize
    @primary_key = options[:primary_key] || :id
    @foreign_key = options[:foreign_key] || (self_class_name.to_s.downcase.singularize + "_id").to_sym
  end
end

module Associatable
  # Phase IIIb

  # in Post model
  # goal => post.user

  # belongs_to :user
  # primary_key: :id 
  # foreign_key: :user_id
  # class_name: "User"

  # getting Post.user_id ; will call the getter for it
  # select * from users where users.id = Post.user_id 

  # refer to above example for details
  def belongs_to(name, options = {})
    options_obj = assoc_options
    options_obj[name] = BelongsToOptions.new(name, options)  

    define_method(name) do 
      f_key = self.send(options_obj[name].foreign_key) # :owner_id getting the id from SQLObject
      options_obj[name].model_class.where({ options_obj[name].primary_key => f_key }).first # returns an array, so take the first element
    end 
    
  end


  # In User model  
  # goal => User.posts

  # has_many: posts
  # primary_key: :id 
  # foreign_key: :user_id
  # class_name: "Post"

  # getting User.id ; will call the getter for it
  # select * from posts where posts.user_id = User.id

  # refer to above example for details
  def has_many(name, options = {})
    options_obj = assoc_options
    options_obj[name] = HasManyOptions.new(name, self.name, options)
    
     define_method(name) do 
      p_key = self.send(options_obj[name].primary_key) # :id getting the id from SQLObject
      options_obj[name].model_class.where({ options_obj[name].foreign_key => p_key }) 
    end  
  end

  def assoc_options
    # Wait to implement this in Phase IVa. Modify `belongs_to`, too.
    @options ||= {} 
    @options
  end
end

class SQLObject
  # Mixin Associatable here...
  extend Associatable
end
