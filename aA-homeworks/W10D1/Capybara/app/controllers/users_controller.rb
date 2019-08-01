class UsersController < ApplicationController

    def new
        @user = User.new
        render :new
    end

    def create
        @user = User.new(user_params)
        # debugger
        if @user.save
            # flash[:notice] = "Successfully created an account!"
            render json: @user.email 
        else 
            flash.now[:errors] = @user.errors.full_messages
            render :new
        end
    end

    private
    def user_params
        params.require(:user).permit(:email, :password)
    end
end
