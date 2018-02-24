class Sked < ApplicationRecord

    has_many :user_skeds, dependent: :destroy 
    has_many :users, through: :user_skeds
    has_many :tasks, dependent: :destroy
    has_many :comments, dependent: :destroy
end
