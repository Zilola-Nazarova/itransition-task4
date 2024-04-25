class User < ApplicationRecord
  require 'securerandom'
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :validatable, :trackable
  validates :name, presence: true
  validates :password, presence: true
end
