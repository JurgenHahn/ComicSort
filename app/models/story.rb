class Story < ApplicationRecord
  belongs_to :comic, required: false

  validates :title, presence: true
end
