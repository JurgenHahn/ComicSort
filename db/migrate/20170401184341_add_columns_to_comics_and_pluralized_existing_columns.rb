class AddColumnsToComicsAndPluralizedExistingColumns < ActiveRecord::Migration[5.0]
  def change
    add_column :comics, :cover_price, :float
    rename_column :comics, :writer, :writers
    rename_column :comics, :penciler, :pencilers
    rename_column :comics, :inker, :inkers
    rename_column :comics, :colorist, :colourists
    rename_column :comics, :editor, :editors
    rename_column :comics, :cover_artist, :cover_artists
    rename_column :comics, :letterer, :letterers
  end
end
