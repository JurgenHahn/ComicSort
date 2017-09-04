class Comic < ApplicationRecord

    has_many :stories, dependent: :destroy
    accepts_nested_attributes_for :stories

    def self.arrange
      Comic.order("volume").order("issue")
    end

    def self.previous_comic(volume, issue)
        Comic.where("(volume == ? AND issue < ?) OR volume < ?", "#{volume}", "#{issue}", "#{volume}").arrange.last
    end

    def self.next_comic(volume, issue)
        Comic.where("(volume == ? AND issue > ?) OR volume > ?", "#{volume}", "#{issue}", "#{volume}").arrange.first
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
