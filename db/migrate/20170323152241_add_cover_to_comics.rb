class AddCoverToComics < ActiveRecord::Migration[5.0]
  def change
    add_column :comics, :cover, :string  
  end
end
