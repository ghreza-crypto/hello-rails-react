Rails.application.routes.draw do
  root 'root#index'
  namespace :api do
    resources :greetings, only: %i[index]
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
