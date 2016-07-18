class AddUserIdToBridges < ActiveRecord::Migration
  def change
    add_column :bridges, :user_id, :integer
    add_index :bridges, :user_id
  end
end
