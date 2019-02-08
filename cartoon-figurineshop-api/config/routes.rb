Rails.application.routes.draw do
  namespace :api do
    resources :figurines, except: [:new, :edit]
  end
end
