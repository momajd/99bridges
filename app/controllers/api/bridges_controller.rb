class Api::BridgesController < ApplicationController
  def index
    @bridges = Bridge.all
    render :index
  end

  def create
  end

  def show
    @bridge = Bridge.find(params[:id])
    render :show
  end


end
