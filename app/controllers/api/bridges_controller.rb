class Api::BridgesController < ApplicationController
  def index
    @bridges = Bridge.in_bounds(params[:bounds])
    render :index
  end

  def create
  end

  def show
    @bridge = Bridge.find(params[:id])
    render :show
  end


end
