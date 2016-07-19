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

  def update
    @bridge = Bridge.find(params[:id])

    if @bridge.update_attributes(bridge_params)
      render :show
    else
      @errors = @bridge.errors.full_messages
      render 'api/shared/errors', status: 422
    end
  end

  private
  def bridge_params
    params.require(:bridge).permit(:title, :description, :lat, :lng, :img_url,
    :user_id, :condition, :spans, :superstructure_type, :substructure_type,
    :year_built, :length, :width, :notes)
  end
end
