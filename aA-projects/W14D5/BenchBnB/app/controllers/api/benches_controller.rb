class Api::BenchesController < ApplicationController
  def index
    # sleep(3)
    # @benches = Bench.all
    
    @benches = Bench.in_bounds(params[:bounds])
  end

  def create
    @bench = Bench.new(bench_params)
    if @bench.save 
      # render "api/users/show"
      render :show 
    else 
      render json: ["made it into the create action and it did not save"], status: 401
    end
  end

  def show 
    @bench = Bench.find(params[:id])
  end

  private 
  def bench_params
    params.require(:bench).permit(:description, :lat, :lng)
  end
end
