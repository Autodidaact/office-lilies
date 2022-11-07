Rails.application.routes.draw do
  resources :replies
  resources :reviews
  resources :plants, only: [:create, :show, :update, :destroy]
  resources :orders
  resources :users, only: [:create, :show]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  post "/login", to: "sessions#create"
  get "/auth", to: "users#show"
  delete "/logout", to: "sessions#destroy"
  
end
