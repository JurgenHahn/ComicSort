class ChangeIssueToFloat < ActiveRecord::Migration[5.0]
  def change
    change_column :comics, :issue, 'float USING CAST(issue AS float)'

  end
end
