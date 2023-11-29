class Greeting < ApplicationRecord
    validates :greeting, presence: true
end
