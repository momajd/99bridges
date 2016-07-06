Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :bridges, only: [:index, :show, :create]
  end
end
