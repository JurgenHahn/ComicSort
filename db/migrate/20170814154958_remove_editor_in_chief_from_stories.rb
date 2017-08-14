class RemoveEditorInChiefFromStories < ActiveRecord::Migration[5.0]
  def change
    remove_column :stories, :editor_in_chief, :string
  end
end
