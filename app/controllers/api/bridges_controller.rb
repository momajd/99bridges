class Api::BridgesController < ApplicationController
  def index
    @bridges = Bridge.in_bounds(params[:bounds])
    render :index
  end

  def create
    @bridge = Bridge.new(bridge_params)

    if @bridge.save
      render :show
    else
      @errors = @bridge.errors.full_messages
      render 'api/shared/errors', status: 422
    end
  end

  def show
    @bridge = Bridge.find(params[:id])
    render :show
  end

  private
  def bridge_params
    params.require(:bridge).permit(:title, :description, :lat, :lng, :img_url, :user_id)
  end
end
