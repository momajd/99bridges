Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :bridges, only: [:index, :show, :create, :update, :destroy]
    resources :users, only: [:show, :create]
    resource :session, only: [:create, :destroy]
    resources :favorites, only: [:create, :destroy]
  end
end
