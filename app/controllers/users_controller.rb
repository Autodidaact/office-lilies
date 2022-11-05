class UsersController < ApplicationController
  #def show
  #  current_user = User.find_by(id: session[:user_id])
   # render json: current_user
  #end
  
  wrap_parameters format: []
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  def create
    user = User.create(user_params)
    render json: user, status: :created
  end
  
  def show
    user = User.find(session[:user_id])
    render json: user, status: :ok
  end
  
  private

  def user_params
    params.permit(:name, :email)
  end
  
  def render_unprocessable_entity_response(invalid)
    render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
  end
end
