class AddTagsToComics < ActiveRecord::Migration[5.0]
  def change
    add_column :comics, :tags, :text
  end
end
