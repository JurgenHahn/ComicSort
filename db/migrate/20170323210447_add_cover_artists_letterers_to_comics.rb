class AddCoverArtistsLetterersToComics < ActiveRecord::Migration[5.0]
  def change
    add_column :comics, :cover_artist, :string
    add_column :comics, :letterer, :string
  end
end
