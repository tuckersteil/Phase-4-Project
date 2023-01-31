Rails.application.routes.draw do
  resources :teetimes
  resources :courses
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/users", to: "users#index"
  delete "/users/:id", to: "users#destroy"
  get "/teetimes/book/:id", to: "teetimes#hello"
  get "/teetimes/time/:id", to: "teetimes#time"
  # resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
