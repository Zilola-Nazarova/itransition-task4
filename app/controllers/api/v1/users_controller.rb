class Api::V1::UsersController < Api::V1::ApplicationController
  def index
    @users = User.all.order(id: :asc)
    render json: @users, status: :ok
  end

  def destroy
    @users = User.where(id: user_params[:ids])
    if @users.destroy_all
      render json: { success: 'destroyed multiple' }, status: :ok
    else
      render json: { error: @users.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def block
    @users = User.where(id: user_params[:ids])
    if @users.update_all(blocked: true)
      render json: { success: 'Users blocked' }, status: :ok
    else
      render json: { errors: @users.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def unblock
    @users = User.where(id: user_params[:ids])
    if @users.update_all(blocked: false)
      render json: { success: 'Users unblocked' }, status: :ok
    else
      render json: { errors: @users.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:users).permit(ids: [])
  end
end
