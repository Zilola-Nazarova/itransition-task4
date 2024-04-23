class Api::V1::AuthenticationController < Api::V1::ApplicationController
  def signup
    @user = User.new(signup_params)
    if @user.save
      render json: { message: 'User signed up successfully.', username: @user.name }, status: :created
    else
      render json: { errors: @user.errors.full_messages }, status: :bad_request
    end
  end

  def signin
    @user = User.find_by_email(signin_params[:email])
    if @user.valid_password?(signin_params[:password])
      render json: { message: 'User signed in successfully.', username: @user.name }, status: :ok
    else
      render json: { errors: "Invalid password" }, status: :unauthorized
    end
  end

  private

  def signin_params
    params.require(:user).permit(:email, :password)
  end

  def signup_params
    params.require(:user).permit(:name, :email, :password)
  end
end