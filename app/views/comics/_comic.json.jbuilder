json.extract! comic, :id, :title, :volume, :issue, :writer, :penciler, :inker, :colorist, :editor, :editor_in_chief, :created_at, :updated_at
json.url comic_url(comic, format: :json)
