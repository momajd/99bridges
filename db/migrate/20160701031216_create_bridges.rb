class CreateBridges < ActiveRecord::Migration
  def change
    create_table :bridges do |t|
      

      t.timestamps null: false
    end
  end
end
