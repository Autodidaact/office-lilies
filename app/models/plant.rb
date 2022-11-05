class Plant < ApplicationRecord
  has_many :orders
  has_many :reviews
  has_one :user, through: :orders
  has_many :users, through: :reviews 
  
end
