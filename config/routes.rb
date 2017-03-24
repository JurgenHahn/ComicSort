Rails.application.routes.draw do
  get 'need_list' => 'comics#need_list'
  root 'comics#need_list'

  resources :comics
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
