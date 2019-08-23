class Api::PokemonController < ApplicationController
  def index
    @pokemons = Pokemon.all
    render :index
  end

  def show
    @pokemon = Pokemon.find(params[:id])
    render :show
  end


  private
  def pokemeon_params 
    params.require(:pokemon).permit(:name, :attack, :defense, :poke_type, :image_url, moves: [])
  end
end
