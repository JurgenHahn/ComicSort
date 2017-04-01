class Comic < ApplicationRecord
  validates :volume, format: { with: /[1 - 4]/,
    message: "must from 1..4"}


  def self.list_comics
    Comic.all.order(:volume).order(:issue)
  end

  def self.search(search)
    where("cover_artist LIKE ?
      OR writer LIKE ?
      OR penciler LIKE ?
      OR inker LIKE ?
      OR colorist LIKE ?
      OR letterer LIKE ?
      OR editor LIKE ?
      OR editor_in_chief LIKE ?
      OR tags LIKE ?",
        "%#{search}%", "%#{search}%", "%#{search}%", "%#{search}%", "%#{search}%",
        "%#{search}%", "%#{search}%", "%#{search}%", "%#{search}%")
    end
end
