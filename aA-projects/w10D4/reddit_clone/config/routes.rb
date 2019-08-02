Rails.application.routes.draw do
  get 'posts/new'
  get 'posts/create'
  get 'posts/update'
  get 'posts/destroy'
  get 'posts/edit'
  get 'posts/show'
  resources :subs 
  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
