Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  namespace :api do
    namespace :v1 do
      get 'users' => 'users#index'
      patch 'users/delete' => 'users#destroy'
      patch 'users/block' => 'users#block'
      patch 'users/unblock' => 'users#unblock'
      post 'auth/signin' => 'authentication#signin'
      post 'auth/signup' => 'authentication#signup'
    end
  end
  # Defines the root path route ("/")
  root 'root#index'
  # Pass route handling to React app
  get '*path', to: 'root#index'
end
