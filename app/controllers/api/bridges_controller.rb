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
      render json: @bridge.errors.full_messages, status: 422
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
      render json: @bridge.errors.full_messages, status: 422
    end
  end

  def destroy
    @bridge = Bridge.find(params[:id])
    @bridge.destroy
    render :show
  end

  private
  def bridge_params
    params.require(:bridge).permit(:title, :description,
    :img_url, :user_id, :condition, :spans, :superstructure_type,
    :substructure_type, :year_built, :length, :width, :notes,
    corner1: [:lat, :lng], corner2: [:lat, :lng], corner3: [:lat, :lng],
    corner4: [:lat, :lng])
  end
end
