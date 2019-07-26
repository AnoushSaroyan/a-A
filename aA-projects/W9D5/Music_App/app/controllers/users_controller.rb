class UsersController < ApplicationController
    def show
        render :show
    end

    def new
        @user = User.new
        render :new
    end

    def create
        @user = User.new(user_params)
        debugger
        if @user.save
            flash[:notice] = "Successfully created an account!"
            redirect_to new_session_url
        else 
        end
    end

    private
    def user_params
        params.require(:user).permit(:email, :password)
    end
end
