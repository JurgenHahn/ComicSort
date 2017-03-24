class Comic < ApplicationRecord

  def self.list_comics
    Comic.all.order(:volume).order(:issue)
  end
end
