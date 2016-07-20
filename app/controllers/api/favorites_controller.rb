class Api::FavoritesController < ApplicationController

  def create
    @favorite = Favorite.new(
      bridge_id: params[:favorite][:bridge_id],
      user_id: current_user.id
    )

    if @favorite.save
      render :show
    else
      render json: @favorite.errors.full_messages, status: 422
    end
  end

  def destroy
    @favorite = Favorite.find_by(
        bridge_id: params[:favorite][:bridge_id],
        user_id: current_user.id
        )

    if @favorite.destroy
      render :show
    else
      render json: @favorite.errors.full_messages, status: 422
    end
  end
end
