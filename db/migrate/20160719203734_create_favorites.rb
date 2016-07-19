class CreateFavorites < ActiveRecord::Migration
  def change
    create_table :favorites do |t|
      t.integer :user_id, null: false
      t.integer :bridge_id, null: false
    end
    add_index :favorites, :user_id
    add_index :favorites, :bridge_id
  end
end
