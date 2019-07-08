require "two_sum"
require 'rspec'

describe "two_sum" do
    let(:array) { [-1, 0, 2, -2, 1] } # => [[0, 4], [2, 3]]
    
    it "should return an empty array if there is no match" do
        expect(two_sum([1, 2, 3])).to eq([])
    end

    it "should return all pairs of positions where the elements at those positions sum to zero" do 
        expect(two_sum(array)).to eq([[0, 4], [2, 3]])
    end     
end 