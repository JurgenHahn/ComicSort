class CreateStories < ActiveRecord::Migration[5.0]
  def change
    create_table :stories do |t|
      t.string :title
      t.string :writers
      t.string :pencilers
      t.string :inkers
      t.string :colourists
      t.string :letterers
      t.string :editors
      t.string :editor_in_chief

      t.timestamps
    end
  end
end
