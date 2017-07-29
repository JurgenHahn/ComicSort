class AddAnnualToComics < ActiveRecord::Migration[5.0]
  def change
    add_column :comics, :annual, :boolean
  end
end
