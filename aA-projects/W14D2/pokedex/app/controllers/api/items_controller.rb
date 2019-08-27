class Api::ItemsController < ApplicationController
  def index
    @items = Item.all
    render :index
  end

  def show
    @item = Item.find(params[:id])
    render :show
  end


  private
  def items_params 
    params.require(:item).permit(:name, :happiness, :price, :image_url, :pokemon_id)
  end
end