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
  get "/users/time", to: "users#usertime"
  get "courses/word/:word", to: "courses#wordy"
  # resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

# Write a custom route that takes in a parameter of a word and looks at all 
# the courses and their descriptions and finds any courses that have that 
# word in the description.  Return all the courses that meet this condition.
#  If no courses meet the condition then you should render json
#  that says: no courses found under a key of error.