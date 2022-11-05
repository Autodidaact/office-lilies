class User < ApplicationRecord
  validates :email, email_format: { message: 'Invalid email format' }
  has_many :orders
  has_many :reviews
  has_many :plants, through: :reviews
  has_many :plants, through: :orders
 
end
