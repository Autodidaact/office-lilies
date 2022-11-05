class PlantsController < ApplicationController
  wrap_parameters format: []
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  def create
    plant = Plant.create(plant_params)
    render json: plant, status: :created
  end
  def index
    plants = Plant.all
    render json: plants
  end
  def show
    plant = Plant.find(params[:id])
    render json: plant, include: [:reviews]
  end
  
  private
  
  def plant_params
    params.permit(:name, :price, :number_in_stock, :image)
  end
  
  def render_unprocessable_entity_response(invalid)
    render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
  end
end
