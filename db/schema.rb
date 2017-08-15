# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170814154958) do

  create_table "comics", force: :cascade do |t|
    t.integer  "volume"
    t.float    "issue"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "cover"
    t.boolean  "owned"
    t.integer  "price"
    t.string   "cover_artists"
    t.text     "tags"
    t.float    "cover_price"
    t.boolean  "annual"
    t.string   "editor_in_chief"
  end

  create_table "stories", force: :cascade do |t|
    t.string   "title"
    t.string   "writers"
    t.string   "pencilers"
    t.string   "inkers"
    t.string   "colourists"
    t.string   "letterers"
    t.string   "editors"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "comic_id"
  end

end
