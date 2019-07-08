require 'rspec'
require 'my_uniq'

describe "my_uniq" do 
    let(:array) { [1, 2, 1, 3, 3] } 

    it "should accept an array as an argument" do 
        expect { my_uniq("12133") }.to raise_error("argument must be an array")
    end     

    it "shouldn't use built-in Array#uniq method" do 
        expect(array).not_to receive(:uniq)
        my_uniq(array)
    end  

    it "returns the array without duplicates" do 
        expect(my_uniq(array)).to eq([1, 2, 3]) 
    end  
end   