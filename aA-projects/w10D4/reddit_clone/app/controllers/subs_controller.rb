class SubsController < ApplicationController
    before_action :require_signin
    
    def index
        @subs = Sub.all 
        render :index 
    end

    def new 
        @subs = Sub.new 
        render :new 
    end

    def create
        @sub = Sub.new(sub_params)
        @sub.user_id = current_user.id 

        if @sub.save 
            redirect_to sub_url(@sub.id)
        else
            flash.now[:errors] = @sub.errors.full_messages
            render :new 
        end
        
    end

    def show
        @sub = Sub.find(params[:id])
        render :show 
    end

    def edit
        @sub = Sub.find(params[:id])
        render :edit 
    end

    def update
        @sub = Sub.find(params[:id])

        if @sub.update(sub_params)
            redirect_to sub_url(@sub.id)
        else
            flash.now[:errors] = @sub.errors.full_messages
            render :edit 
        end
    end

    def destroy
        @sub = Sub.find(params[:id])
        @sub.destroy
        redirect_to subs_url
    end

    private
    def sub_params 
        params.require(:sub).permit(:title, :description)
    end

end
