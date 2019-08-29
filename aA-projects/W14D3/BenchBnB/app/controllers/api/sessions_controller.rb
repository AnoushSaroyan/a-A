class Api::SessionsController < ApplicationController
    def create 
        @user = User.find_by_cerdentails(params[:user][:username],params[:user][:password])
        if @user
            singin(@user)
            render "/api/users/show"
        else
            render json: ["Invalid username or password"], status: 404
        end

    end

    def destroy
        sign_out
        render json: {}
    end
end
