Rails.application.routes.draw do
  # Your routes here!

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
  # Your routes here
  # ToDo: nest the routes for the gifts from the guest 
    
    resources :guests, only: [:show, :index] do
      resources :gifts, only: [:index]
    end
    resources :parties, only: [:show, :index]
    resources :gifts, only: [:show]
  end
end
