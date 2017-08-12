class AddComicIdToStories < ActiveRecord::Migration[5.0]
  def change
    add_column :stories, :comic_id, :integer
  end
  
end
