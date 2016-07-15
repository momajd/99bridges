class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
              params[:user][:username],
              params[:user][:password]
              )

    if @user
      login!(@user)
      render 'api/users/show'
    else
      render json: {error: ['Invalid username or password']}, status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout!
      # render 'api/users/show'
      render json: {} #TODO verify that this is ok
    else
      render json: {error: ['No one is logged in']}, status: 404
    end
  end
end
