class SkedController < ApplicationController
    before_action :authenticate_user!
  
    def index
      @skeds = current_user.skeds
  
      render json: @skeds
    end
  
    def show
      @sked = sked.find(params[:id])
  
      render json: @sked
    end
  
    def create
      @user = current_user
      @sked = @user.skeds.build(sked_params)
  
      if @user.save
        render json: @sked, status: :created, location: @sked
      else
        render json: @sked.errors, status: :unprocessable_entity
      end
    end
  
    def update
      @sked = sked.find(params[:id])
  
  
      if @sked.update(sked_params)
        render json: @sked
      else
        render json: @sked.errors, status: :unprocessable_entity
      end
    end
  
    def destroy
      @sked = sked.find(params[:id]).delete
  
      render status: :ok
    end
  
    private
  
    def sked_params
      params.require(:sked).permit(:name, :picture, :details)
    end
  end