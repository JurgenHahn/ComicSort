class AddEditorInChiefToComics < ActiveRecord::Migration[5.0]
  def change
    add_column :comics, :editor_in_chief, :string
  end
end
