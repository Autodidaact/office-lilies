class SessionsController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  def create
    user = User.find_by(email: params[:email])
    session[:user_id] = user.id
    render json: user, status: :created
  end
  def destroy
    session.delete :user_id
    head :no_content
  end
  
  private
  def render_unprocessable_entity_response(invalid)
    render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
  end
end
