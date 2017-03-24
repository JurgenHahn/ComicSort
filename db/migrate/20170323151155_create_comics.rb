class CreateComics < ActiveRecord::Migration[5.0]
  def change
    create_table :comics do |t|
      t.string :title
      t.integer :volume
      t.integer :issue
      t.string :writer
      t.string :penciler
      t.string :inker
      t.string :colorist
      t.string :editor
      t.string :editor_in_chief

      t.timestamps
    end
  end
end
