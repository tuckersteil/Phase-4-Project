class User < ApplicationRecord
    has_secure_password 
    has_many :teetimes
    has_many :courses
end
