class Comic < ApplicationRecord

    has_many :stories, dependent: :destroy
    accepts_nested_attributes_for :stories

    def self.sort_comics
      Comic.all.order(:volume).order(:issue)
    end

    def self.previous_comic(volume, issue)
        Comic.where("(volume == ? AND issue < ?) OR volume < ?", "#{volume}", "#{issue}", "#{volume}").order("volume DESC").order("issue DESC").first
    end

    def self.next_comic(volume, issue)
        Comic.where("(volume == ? AND issue > ?) OR volume > ?", "#{volume}", "#{issue}", "#{volume}").order("volume").order("issue").first
    end

    def self.search(search)
        Comic.joins('LEFT JOIN stories ON comics.id = stories.comic_id').where("writers LIKE ? OR
                                                                                pencilers LIKE ? OR
                                                                                inkers LIKE ? OR
                                                                                colourists LIKE ? OR
                                                                                letterers LIKE ? OR
                                                                                editors LIKE ? OR
                                                                                cover_artists LIKE ? OR
                                                                                editor_in_chief LIKE ? OR
                                                                                tags LIKE ?",
                                                                                "%#{search}%", "%#{search}%", "%#{search}%",
                                                                                "%#{search}%", "%#{search}%", "%#{search}%",
                                                                                "%#{search}%", "%#{search}%", "%#{search}%").uniq
    end
end
