class Api::V1::AuthenticationController < Api::V1::ApplicationController
  skip_before_action :authenticate_request

  def signup
    @user = User.new(signup_params)
    if @user.save
      render json: { message: 'User signed up successfully.', username: @user.name }, status: :created
    else
      render json: { errors: @user.errors.full_messages }, status: :bad_request
    end
  end

  def signin
    return unless exists?

    if @user.valid_password?(signin_params[:password])
      authenticate
      return unless isblocked?

      render json: { message: 'User signed in successfully.', username: @user.name, token: @token }, status: :ok
    else
      render json: { errors: 'Invalid password' }, status: :unauthorized
    end
  end

  private

  def signin_params
    params.require(:user).permit(:email, :password)
  end

  def signup_params
    params.require(:user).permit(:name, :email, :password)
  end

  def authenticate
    @token = jwt_encode(user_id: @user.id)
    @user.update_attribute(:last_sign_in, Time.now.utc)
  end

  def exists?
    unless (@user = User.find_by_email(signin_params[:email]))
      render json: { errors: "User #{signin_params[:email]} is not registered" }, status: :unauthorized
      return false
    end
    true
  end

  def isblocked?
    if @user.blocked
      render json: { errors: "User #{signin_params[:email]} is blocked" }, status: :unauthorized
      return false
    end
    true
  end
end
