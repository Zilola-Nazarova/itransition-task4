class Api::V1::UsersController < Api::V1::ApplicationController
  def index
    @users = User.all.order(id: :asc)
    render json: @users, status: :ok
  end

  def destroy
    @user = set_user
    if @user.destroy
      render json: { success: 'user deleted' }, status: :ok
    else
      render json: { error: 'user not deleted' }, status: :not_found
    end
  end

  def update
    @users = set_user
    if @user.update!(blocked: !@user.blocked)
      render json: { success: 'Status updated' }, status: :ok
    else
      render json: { errors: @user.errors.full_messages },
             status: :unprocessable_entity
    end
  end

  private

  def set_user
    @user = User.find(params[:id])
  end
end
