class Api::V1::ApplicationController < ActionController::API
  include JsonWebToken
  before_action :authenticate_request

  private

  def authenticate_request
    header = request.headers['Authorization']
    header = header.split.last if header
    decoded = jwt_decode(header)
    find_user(decoded)
  end

  def find_user(decoded)
    if User.exists?(decoded[:user_id])
      @current_user = User.find(decoded[:user_id])
      render json: { errors: "User #{@current_user.email} is blocked" }, status: :unauthorized if @current_user.blocked
    else
      render json: { errors: 'Authentication failed' }, status: :unauthorized
    end
  end
end
