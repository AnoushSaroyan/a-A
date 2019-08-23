# json.extract! @guest, :name, :age, :favorite_color

json.gifts do 
    json.array! @guest.gifts, :title, :description
end

json.partial! "/api/guests/guest", guest: @guest

# json.array! @guests do |guest|
#     json.partial! "/api/guests/guest", guest: guest
# end

# json.gifts do
#     json.array! @guest.gifts do |gift|
#         json.title gift.title
#         json.description gift.description
#     end
# end