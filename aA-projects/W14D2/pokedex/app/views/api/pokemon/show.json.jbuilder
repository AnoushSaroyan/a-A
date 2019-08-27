json.pokemon do
    json.extract! @pokemon, :id, :name, :attack, :poke_type, :defense, :moves, :item_ids
    json.image_url image_path(@pokemon.image_url)
end

json.items do  
    @pokemon.items.each do |item|
        json.set! item.id do  
            json.extract! item, :id, :name, :pokemon_id, :happiness, :price
            json.image_url asset_path(item.image_url)
        end
    end
end