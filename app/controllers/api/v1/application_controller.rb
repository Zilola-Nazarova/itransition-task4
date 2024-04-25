class Api::V1::ApplicationController < ActionController::API
  include JsonWebToken
  before_action :authenticate_request

  private

  def authenticate_request
    header = request.headers['Authorization']
    header = header.split.last if header
    decoded = jwt_decode(header)
    if User.exists?(decoded[:user_id])
      @current_user = User.find(decoded[:user_id])
    else
      render json: { errors: "Authentication failed" }, status: :unauthorized
    end
  end
end
