require 'rspec'
require 'dessert'

=begin
Instructions: implement all of the pending specs (the `it` statements without blocks)! Be sure to look over the solutions when you're done.
=end

describe Dessert do
  subject(:dessert) { Dessert.new("macaroon", 68, chef) }
  let(:chef) { double(:name => "Anoush") }

  describe "#initialize" do
    it "sets a type" do 
      expect(dessert.type).to eq("macaroon")
    end

    it "sets a quantity" do 
      expect(dessert.quantity).to eq(68)
    end   

    it "starts ingredients as an empty array" do 
      expect(dessert.ingredients).to eq([])
    end   

    it "raises an argument error when given a non-integer quantity" do 
      expect { Dessert.new("chocolate brownie", "68", chef) }.to raise_error(ArgumentError)
    end   
  end

  describe "#add_ingredient" do
    it "adds an ingredient to the ingredients array" do 
      dessert.add_ingredient("almond powder")
      expect(dessert.ingredients).to include("almond powder")
    end   
  end

  describe "#mix!" do
    it "shuffles the ingredient array" do 
      ingredients = ["almond powder", "sugar", "egg white"]

      ingredients.each do |ingredient|
        dessert.add_ingredient(ingredient)
      end   

      expect(dessert.ingredients).to eq(ingredients)

      dessert.mix!
      expect(dessert.ingredients).to_not eq(ingredients)
    end   
  end

  describe "#eat" do
    it "subtracts an amount from the quantity" do 
      dessert.eat(8)
      expect(dessert.quantity).to eq(60)
    end   

    it "raises an error if the amount is greater than the quantity" do 
      expect { dessert.eat(70) }.to raise_error("not enough left!" )
    end   
  end

  describe "#serve" do
    it "contains the titleized version of the chef's name" do 
      allow(chef).to receive(:titleize).and_return("Chef Anoush the Great Baker")
      expect(dessert.serve).to eq("Chef Anoush the Great Baker has made 68 macaroons!")
    end   

  end

  describe "#make_more" do
    it "calls bake on the dessert's chef with the dessert passed in" do 
      expect(chef).to receive(:bake).with(dessert)
      dessert.make_more
    end  
  end
end
