class Api::V1::GreetingsController < Api::V1::ApplicationController
  def random_greeting
    @greeting = Greeting.find(Greeting.pluck(:id).sample)
    render json: @greeting, status: :ok
  end
end
