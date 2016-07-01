class CreateBridges < ActiveRecord::Migration
  def change
    create_table :bridges do |t|
      t.string :title, null: false
      t.string :description
      t.float :lat, null: false 
      t.float :long, null: false

      t.timestamps null: false
    end
  end
end
