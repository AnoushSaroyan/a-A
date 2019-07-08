require "rspec"
require "my_transpose"

describe "my_transpose" do 
    let(:array) { [[0, 1, 2], [3, 4, 5], [6, 7, 8]] }

    it "shouldn't use built-in Array#transpose method" do 
        expect(array).to_not receive(:transpose)
        my_transpose(array)
    end   

    it "should transpose the rows into columns" do 
        expect(my_transpose(array)).to eq([[0, 3, 6], [1, 4, 7], [2, 5, 8]])
    end                   
end     