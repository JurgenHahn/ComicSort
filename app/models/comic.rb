class Comic < ApplicationRecord

  has_many :stories, dependent: :destroy
  
  validates :volume, format: { with: /[1-5]/,
    message: "must from 1..5"}

  def self.list_comics
    Comic.all.order(:volume).order(:issue)
  end

  def self.search(search)
    where("cover_artists LIKE ?
      OR writers LIKE ?
      OR pencilers LIKE ?
      OR inkers LIKE ?
      OR colourists LIKE ?
      OR letterers LIKE ?
      OR editors LIKE ?
      OR editor_in_chief LIKE ?
      OR tags LIKE ?",
        "%#{search}%", "%#{search}%", "%#{search}%", "%#{search}%", "%#{search}%",
        "%#{search}%", "%#{search}%", "%#{search}%", "%#{search}%")
    end
end
