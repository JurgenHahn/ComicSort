class AddOwnedAndPriceToComics < ActiveRecord::Migration[5.0]
  def change
    add_column :comics, :owned, :boolean
    add_column :comics, :price, :integer
  end
end
