# create_table "cats", force: :cascade do |t|
#     t.date "birth_date", null: false
#     t.string "color", null: false
#     t.string "name", null: false
#     t.string "sex", null: false
#     t.text "description", null: false
#     t.datetime "created_at", null: false
#     t.datetime "updated_at", null: false
#   end

require 'action_view'
require 'date'

class Cat < ApplicationRecord
    include ActionView::Helpers::DateHelper
    
    COLOR = %w(blue red black pink)
    SEX = %w(M F)

    validates :birth_date, :color,:sex,:name, :description, presence: true
    validates :color, inclusion: { in: COLOR, message: "%{value} is not a valid color" }
    validates :sex, inclusion: { in: SEX, message: "%{value} is not a valid sex" }
    
    def age
        # debugger
        time_ago_in_words(birth_date)
        # distance_of_time_in_words(Time.now, birth_date)Yahhhh!!!!
    end
    
end    