class AddBridgeCornerColumns < ActiveRecord::Migration
  def change
    add_column :bridges, :corner1, :float
    add_column :bridges, :corner2, :float
    add_column :bridges, :corner3, :float
    add_column :bridges, :corner4, :float
  end
end
