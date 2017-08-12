class RemoveFieldsFromComics < ActiveRecord::Migration[5.0]
  def change
    remove_column :comics, :title, :string
    remove_column :comics, :writers, :string
    remove_column :comics, :pencilers, :string
    remove_column :comics, :inkers, :string
    remove_column :comics, :colourists, :string
    remove_column :comics, :letterers, :string
    remove_column :comics, :editors, :string
    remove_column :comics, :editor_in_chief, :string
  end
end
