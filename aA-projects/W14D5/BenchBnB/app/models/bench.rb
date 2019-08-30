class Bench < ApplicationRecord

    def self.in_bounds(bounds)
        self.where("lat < #{bounds[:northEast][:lat]}")
            .where("lng < #{bounds[:northEast][:lng]}")
            .where("lat < #{bounds[:southWest][:lat]}")
            .where("lng > #{bounds[:southWest][:lng]}")
    end
end

#  {
  #   "northEast"=> {"lat"=>"37.80971", "lng"=>"-122.39208"},
  #   "southWest"=> {"lat"=>"37.74187", "lng"=>"-122.47791"}
  # }